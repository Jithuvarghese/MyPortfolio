import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import SectionWrapper from "./SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import IconWrapper from "./IconWrapper";
import { useAppPreferences } from "../context/AppPreferencesContext";

const EMAILJS_SERVICE_ID = "service_0rojugj";
const EMAILJS_TEMPLATE_ID = "template_edsgiev";
const EMAILJS_PUBLIC_KEY = "gndouAaMTLWA7PkoF";

const Contact = () => {
  const { dictionary } = useAppPreferences();

  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!form.name.trim()) {
      newErrors.name = dictionary.contact.errors.nameRequired;
      valid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = dictionary.contact.errors.emailRequired;
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = dictionary.contact.errors.emailInvalid;
      valid = false;
    }

    if (!form.message.trim()) {
      newErrors.message = dictionary.contact.errors.messageRequired;
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          name: form.name,
          from_email: form.email,
          email: form.email,
          message: form.message,
          to_name: "Jithu",
        },
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setFormSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setFormSubmitted(false), 5000);
      })
      .catch((error) => {
        setLoading(false);
        console.error("EmailJS error:", error);
        alert(dictionary.contact.errors.sendFailed);
      });
  };

  const arrow = <IconWrapper icon={FiArrowUpRight} className="flex rtl:-scale-x-100" />;

  const infoRows = [
    { label: dictionary.contact.labels.emailTitle, value: "jithuv01@gmail.com", href: "mailto:jithuv01@gmail.com" },
    { label: dictionary.contact.labels.phone, value: "+91 90743 72489" },
    { label: dictionary.contact.labels.location, value: "Bengaluru, India" },
  ];

  const errorText = (message: string, id: string) => (
    <span id={id} role="alert" className="mt-2 font-mono text-xs text-fg">
      — {message}
    </span>
  );

  return (
    <div id="contact-section" className="grid gap-16 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-7">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{dictionary.contact.intro}</p>
          <h2 className={`${styles.sectionHeadText} mt-4`}>{dictionary.contact.heading}</h2>
        </motion.div>

        <motion.div variants={fadeIn("", "", 0.1, 0.5)} aria-live="polite">
          {formSubmitted ? (
            <div className="mt-12 border border-line p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-fg">
                <IconWrapper icon={FiCheck} className="flex text-xl" />
              </span>
              <h3 className="mt-6 font-heading text-2xl font-semibold text-fg">{dictionary.contact.successTitle}</h3>
              <p className="mt-2 text-muted">{dictionary.contact.successBody}</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
              <label className="flex flex-col">
                <span className="eyebrow">{dictionary.contact.labels.name}</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={dictionary.contact.placeholders.name}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "error-name" : undefined}
                  className={`field ${errors.name ? "field-invalid" : ""}`}
                />
                {errors.name && errorText(errors.name, "error-name")}
              </label>

              <label className="flex flex-col">
                <span className="eyebrow">{dictionary.contact.labels.email}</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={dictionary.contact.placeholders.email}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "error-email" : undefined}
                  className={`field ${errors.email ? "field-invalid" : ""}`}
                />
                {errors.email && errorText(errors.email, "error-email")}
              </label>

              <label className="flex flex-col">
                <span className="eyebrow">{dictionary.contact.labels.message}</span>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={dictionary.contact.placeholders.message}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "error-message" : undefined}
                  className={`field resize-none ${errors.message ? "field-invalid" : ""}`}
                />
                {errors.message && errorText(errors.message, "error-message")}
              </label>

              <button type="submit" disabled={loading} className="btn btn-solid w-fit">
                {loading ? dictionary.contact.labels.sending : dictionary.contact.labels.send}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <motion.div variants={fadeIn("", "", 0.2, 0.5)} className="lg:col-span-5 lg:pt-[7.5rem]">
        <h3 className="eyebrow">{dictionary.contact.labels.contactInfo}</h3>

        <dl className="mt-6 border-t border-line">
          {infoRows.map((row) => (
            <div key={row.label} className="flex flex-col gap-1 border-b border-line py-5">
              <dt className="eyebrow">{row.label}</dt>
              <dd className="text-lg text-fg [overflow-wrap:anywhere]">
                {row.href ? (
                  <a href={row.href} className="hover:underline">
                    {row.value}
                  </a>
                ) : (
                  row.value
                )}
              </dd>
            </div>
          ))}
          <div className="flex flex-col gap-1 border-b border-line py-5">
            <dt className="eyebrow">{dictionary.contact.labels.resume}</dt>
            <dd className="text-lg text-fg">
              <a href="/assets/Jithu_Varghese_Resume.pdf" download className="inline-flex items-center gap-1 hover:underline">
                {dictionary.contact.labels.downloadResume}
                {arrow}
              </a>
            </dd>
          </div>
        </dl>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          <a href="https://github.com/Jithuvarghese" target="_blank" rel="noopener noreferrer" className="text-link">
            GitHub
            {arrow}
          </a>
          <a
            href="https://www.linkedin.com/in/jithu-varghese-jacob/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            LinkedIn
            {arrow}
          </a>
          <a href="mailto:jithuv01@gmail.com" className="text-link">
            Email
            {arrow}
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
