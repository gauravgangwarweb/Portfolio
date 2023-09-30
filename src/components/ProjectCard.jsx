import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import { setHide } from "../redux/hide";
import { setSelectedPrj } from "../redux/selectedPrj";

const ProjectCard = (props) => {
    const { ref, inView } = useInView();
    const dispatch = useDispatch()
    return (
        <motion.div
            ref={ref}
            className="w-full px-4 pt-5 pb-3 rounded-lg bg-anim1 cursor-pointer hover-effect hover-effect"
            key={props.id}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : ""}
            transition={{ duration: 1, delay: 0.2 }}
            onClick={() => {dispatch(setHide(false)); dispatch(setSelectedPrj(props.data))}}
        >
            <img src={props.image} alt={props.name} className="w-full rounded-lg p-1" />
            <h5 className="text-2xl text-center mt-2 font-bold">{props.name}</h5>
        </motion.div>
    );
}

export default ProjectCard;