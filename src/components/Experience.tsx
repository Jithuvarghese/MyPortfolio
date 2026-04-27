import { VerticalTimeline, VerticalTimelineElement } from "./CustomVerticalTimeline";
import { motion } from "framer-motion";

import { styles } from "../styles";
import SectionWrapper from "./SectionWrapper";
import { textVariant } from "../utils/motion";
import { useAppPreferences } from "../context/AppPreferencesContext";

interface ExperienceCardProps {
  experience: {
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
  };
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const { theme } = useAppPreferences();

  const isLight = theme === "light";

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: isLight ? "rgba(217, 241, 237, 0.95)" : "#071a18",
        color: isLight ? "#0f172a" : "#fff",
        border: isLight
          ? "1px solid rgba(13,148,136,0.35)"
          : "1px solid rgba(20,184,166,0.15)",
      }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <h1 className="text-xl" style={{ color: "#ffffff" }}>
            {experience.company_name.charAt(0)}
          </h1>
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
        <p className="text-[#14B8A6] text-[13px] font-medium mt-1 opacity-80">
          {experience.date}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { dictionary } = useAppPreferences();

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{dictionary.experience.intro}</p>
        <h2 className={styles.sectionHeadText}>{dictionary.experience.heading}</h2>
      </motion.div>

      <div className="mt-8 flex flex-col">
        <VerticalTimeline>
          {dictionary.data.experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work"); 