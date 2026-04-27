import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import SectionWrapper from "./SectionWrapper";
import { slideIn } from "../utils/motion";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiDownload } from "react-icons/fi";
import gsap from "gsap";
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

  useEffect(() => {
    // Animation for the contact items
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact-section",
        start: "top 80%",
      },
    });

    tl.from(".contact-item", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

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

  return (
    <div id="contact-section" className="flex flex-col xl:flex-row gap-10 overflow-hidden">
      <div
        className="flex-[0.75] bg-[rgba(5,20,20,0.7)] p-8 rounded-lg border border-[rgba(20,184,166,0.2)]"
      >
        <p className="sectionSubText">{dictionary.contact.intro}</p>
        <h3 className="sectionHeadText">{dictionary.contact.heading}</h3>

        {formSubmitted ? (
          <div
            className="mt-10 flex flex-col bg-[rgba(26,23,41,0.8)] p-6 rounded-lg border border-green-500/20"
          >
            <div className="mb-4 flex items-center justify-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h4 className="text-white font-bold text-lg mb-2 text-center">{dictionary.contact.successTitle}</h4>
            <p className="text-[#aaa6c3] text-center">
              {dictionary.contact.successBody}
            </p>
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-6"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">{dictionary.contact.labels.name}</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={dictionary.contact.placeholders.name}
                className={`w-full ${errors.name ? "border-red-500" : ""}`}
              />
              {errors.name && (
                <span className="text-red-500 mt-1 text-sm">{errors.name}</span>
              )}
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">{dictionary.contact.labels.email}</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={dictionary.contact.placeholders.email}
                className={`w-full ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && (
                <span className="text-red-500 mt-1 text-sm">{errors.email}</span>
              )}
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">{dictionary.contact.labels.message}</span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={dictionary.contact.placeholders.message}
                className={`w-full resize-none ${errors.message ? "border-red-500" : ""}`}
              />
              {errors.message && (
                <span className="text-red-500 mt-1 text-sm">{errors.message}</span>
              )}
            </label>

            <button
              type="submit"
              disabled={loading}
              className="button-primary py-3 px-8 w-fit mt-2"
            >
              {loading ? dictionary.contact.labels.sending : dictionary.contact.labels.send}
            </button>
          </form>
        )}
      </div>

      <div
        className="xl:flex-1 h-auto"
      >
        <div className="h-full flex flex-col justify-center">
          <h3 className="sectionHeadText mb-6 text-center xl:text-left">
            {dictionary.contact.labels.contactInfo}
          </h3>
          
          <div className="grid gap-5">
            <div className="contact-info-card flex items-center gap-5">
              <div className="contact-icon-container">
                <FiMail className="text-white text-xl" />
              </div>
              <div>
                <h4 className="contact-title">{dictionary.contact.labels.emailTitle}</h4>
                <p className="contact-text">jithuv01@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-info-card flex items-center gap-5">
              <div className="contact-icon-container">
                <FiPhone className="text-white text-xl" />
              </div>
              <div>
                <h4 className="contact-title">{dictionary.contact.labels.phone}</h4>
                <p className="contact-text">+91 90743 72489</p>
              </div>
            </div>
            
            <div className="contact-info-card flex items-center gap-5">
              <div className="contact-icon-container">
                <FiMapPin className="text-white text-xl" />
              </div>
              <div>
                <h4 className="contact-title">{dictionary.contact.labels.location}</h4>
                <p className="contact-text">Bengaluru, India</p>
              </div>
            </div>
            
            <div className="contact-info-card flex items-center justify-between gap-5 mt-2">
              <div className="flex items-center gap-5">
                <div className="contact-icon-container">
                  <FiDownload className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="contact-title">{dictionary.contact.labels.resume}</h4>
                  <p className="contact-text">{dictionary.contact.labels.downloadResume}</p>
                </div>
              </div>
              <a 
                href="/assets/Jithu_Varghese_Resume.pdf" 
                download
                className="button-primary py-2 px-4 text-sm"
              >
                {dictionary.hero.resume}
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-6 mt-6">
              <a
                href="https://github.com/Jithuvarghese"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon-container hover:scale-110 transition-transform"
                aria-label="GitHub"
              >
                <FiGithub className="text-white text-xl" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/jithu-varghese-jacob/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon-container hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="text-white text-xl" />
              </a>
              
              <a
                href={`mailto:jithuv01@gmail.com`}
                className="contact-icon-container hover:scale-110 transition-transform"
                aria-label="Email"
              >
                <FiMail className="text-white text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact"); 