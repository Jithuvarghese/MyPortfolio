import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { styles } from "../styles";
import SectionWrapper from "./SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import IconWrapper from "./IconWrapper";
import { useAppPreferences } from "../context/AppPreferencesContext";

interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link: string;
  live_demo_link: string;
  sourceCodeAria: string;
  liveDemoAria: string;
}

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
  sourceCodeAria,
  liveDemoAria,
}: ProjectCardProps) => {
  return (
    // Own whileInView so each card reveals as it scrolls in, staggered by column.
    <motion.article
      variants={fadeIn("", "", (index % 2) * 0.08, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: "some" }}
      className="project-card flex h-full flex-col"
    >
      <div className="aspect-[16/10] w-full overflow-hidden border border-line bg-surface">
        <img
          src={image}
          alt={`Project ${name} screenshot`}
          loading="lazy"
          className="project-image h-full w-full object-cover object-top"
        />
      </div>

      <div className="flex flex-1 flex-col pt-6">
        <h3 className="font-heading text-2xl font-semibold tracking-display text-fg">{name}</h3>
        <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-muted">{description}</p>

        <ul className="mt-5 flex list-none flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={`${name}-${tag.name}`} className="tag">
              {tag.name}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-x-6 gap-y-3 pt-6">
          {source_code_link && (
            <a href={source_code_link} target="_blank" rel="noopener noreferrer" className="text-link">
              {sourceCodeAria}
              <IconWrapper icon={FiArrowUpRight} className="flex rtl:-scale-x-100" />
            </a>
          )}
          {live_demo_link && (
            <a href={live_demo_link} target="_blank" rel="noopener noreferrer" className="text-link">
              {liveDemoAria}
              <IconWrapper icon={FiArrowUpRight} className="flex rtl:-scale-x-100" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const { dictionary } = useAppPreferences();

  return (
    <>
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        <motion.div variants={textVariant()} className="md:col-span-5">
          <p className={styles.sectionSubText}>{dictionary.projects.intro}</p>
          <h2 className={`${styles.sectionHeadText} mt-4`}>{dictionary.projects.heading}</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 0.5)}
          className="text-lg leading-relaxed text-muted md:col-span-7 md:text-xl"
        >
          {dictionary.projects.body}
        </motion.p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
        {dictionary.data.projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            sourceCodeAria={dictionary.projects.sourceCodeAria}
            liveDemoAria={dictionary.projects.liveDemoAria}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
