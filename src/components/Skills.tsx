import { motion } from "framer-motion";
import { styles } from "../styles";
import SectionWrapper from "./SectionWrapper";
import { fadeIn, reveal, textVariant } from "../utils/motion";
import { useAppPreferences } from "../context/AppPreferencesContext";

const Skills = () => {
  const { dictionary } = useAppPreferences();

  return (
    <div id="skills-section">
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        <motion.div variants={textVariant()} className="md:col-span-5">
          <p className={styles.sectionSubText}>{dictionary.skills.intro}</p>
          <h2 className={`${styles.sectionHeadText} mt-4`}>{dictionary.skills.heading}</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 0.5)}
          className="text-lg leading-relaxed text-muted md:col-span-7 md:text-xl"
        >
          {dictionary.skills.body}
        </motion.p>
      </div>

      <div className="mt-16 border-t border-line">
        {dictionary.data.skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={fadeIn("", "", 0)}
            {...reveal}
            className="grid gap-5 border-b border-line py-8 md:grid-cols-12 md:gap-12"
          >
            <h3 className="font-heading text-xl font-semibold text-fg md:col-span-3">{category.title}</h3>
            <ul className="flex list-none flex-wrap gap-2 md:col-span-9">
              {category.skills.map((skill) => (
                <li key={skill} className="tag">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
