import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component: React.ComponentType<any>, idName: string) =>
  function HOC() {
    return (
      <motion.section
        id={idName}
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: "some" }}
        className="relative scroll-mt-16 border-t border-line py-24 md:py-32"
      >
        <div className={`${styles.paddingX} mx-auto w-full max-w-7xl`}>
          <Component />
        </div>
      </motion.section>
    );
  };

export default SectionWrapper;
