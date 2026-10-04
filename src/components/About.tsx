import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, reveal, textVariant } from "../utils/motion";
import SectionWrapper from "./SectionWrapper";
import { useAppPreferences } from "../context/AppPreferencesContext";

const About = () => {
  const { dictionary } = useAppPreferences();

  return (
    <>
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        <motion.div variants={textVariant()} className="md:col-span-5">
          <p className={styles.sectionSubText}>{dictionary.about.intro}</p>
          <h2 className={`${styles.sectionHeadText} mt-4`}>{dictionary.about.heading}</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 0.5)}
          className="text-lg leading-relaxed text-muted md:col-span-7 md:text-xl"
        >
          {dictionary.about.body}
        </motion.p>
      </div>

      <motion.ul
        variants={fadeIn("", "", 0.1)}
        {...reveal}
        className="mt-16 grid list-none border-s border-t border-line sm:grid-cols-2 lg:grid-cols-4"
      >
        {dictionary.data.services.map((service, index) => (
          <li
            key={service.title}
            className="flex min-h-[160px] flex-col justify-between gap-10 border-b border-e border-line p-6"
          >
            <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="font-heading text-xl font-semibold leading-snug text-fg">{service.title}</h3>
          </li>
        ))}
      </motion.ul>

      <motion.div
        variants={fadeIn("", "", 0.1)}
        {...reveal}
        className="mt-20 grid gap-8 md:grid-cols-12 md:gap-12"
      >
        <h3 className="font-mono text-xs uppercase tracking-label text-muted md:col-span-5">
          {dictionary.about.certificationsHeading}
        </h3>
        <ul className="list-none border-t border-line md:col-span-7">
          {dictionary.about.certifications.map((item) => (
            <li key={item} className="flex items-baseline gap-4 border-b border-line py-4 text-fg">
              <span className="font-mono text-muted" aria-hidden="true">
                —
              </span>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
