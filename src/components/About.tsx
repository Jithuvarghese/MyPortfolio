import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "./SectionWrapper";
import { useAppPreferences } from "../context/AppPreferencesContext";

const ServiceCard = ({ index, title, icon }: { index: number, title: string, icon: string }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full sm:w-[250px] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <div className="w-16 h-16 object-contain flex items-center justify-center">
          <h1 className="text-4xl">{title.charAt(0)}</h1>
        </div>

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  const { dictionary } = useAppPreferences();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{dictionary.about.intro}</p>
        <h2 className={styles.sectionHeadText}>{dictionary.about.heading}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {dictionary.about.body}
      </motion.p>

      <div className="mt-12 flex flex-wrap gap-10 justify-center">
        {dictionary.data.services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      
      <motion.div 
        variants={fadeIn("up", "spring", 0.5, 1)}
        className="mt-16 p-8 bg-tertiary rounded-2xl"
      >
        <h3 className="text-xl font-bold text-white mb-4">{dictionary.about.certificationsHeading}</h3>
        <ul className="text-secondary space-y-2 list-none">
          {dictionary.about.certifications.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-[#14B8A6]">✦</span>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about"); 