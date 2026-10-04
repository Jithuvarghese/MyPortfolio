import { motion } from "framer-motion";

import { styles } from "../styles";
import SectionWrapper from "./SectionWrapper";
import { fadeIn, reveal, textVariant } from "../utils/motion";
import { useAppPreferences } from "../context/AppPreferencesContext";

const Experience = () => {
  const { dictionary } = useAppPreferences();

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{dictionary.experience.intro}</p>
        <h2 className={`${styles.sectionHeadText} mt-4`}>{dictionary.experience.heading}</h2>
      </motion.div>

      <div className="mt-16 border-t border-line">
        {dictionary.data.experiences.map((experience, index) => (
          <motion.article
            key={index}
            variants={fadeIn("", "", 0)}
            {...reveal}
            className="grid gap-4 border-b border-line py-10 md:grid-cols-12 md:gap-12"
          >
            <p className="font-mono text-xs uppercase tracking-label text-muted md:col-span-3">
              {experience.date}
            </p>

            <div className="md:col-span-9">
              <h3 className="font-heading text-2xl font-semibold tracking-display text-fg sm:text-3xl">
                {experience.title}
              </h3>
              <p className="mt-1 text-muted">{experience.company_name}</p>

              <ul className="mt-6 ms-5 list-disc space-y-3 text-[15px] leading-relaxed text-muted marker:text-line">
                {experience.points.map((point, pointIndex) => (
                  <li key={`experience-point-${pointIndex}`} className="ps-1">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
