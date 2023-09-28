import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProjectCard = (props) => {
    const { ref, inView } = useInView();

    return (
        <motion.div
            ref={ref}
            className="w-full px-4 pt-5 pb-3 rounded-lg bg-anim2 cursor-pointer"
            key={props.id}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : ""}
            transition={{ duration: 1, delay: 0.2 }}
        >
            <img src={props.image} alt={props.name} className="w-full rounded-lg p-1" />
            <h5 className="text-2xl text-center mt-2 font-bold">{props.name}</h5>
        </motion.div>
    );
}

export default ProjectCard;