import { useInView } from 'react-intersection-observer';
import supabase from "../assets/supabese";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Tools from "./Tools";
import Design from "./Design";
import Communication from "./Communication";
import SoftSkills from "./SoftSkills";
import { motion } from 'framer-motion';

const TechSection = () => {
    const { ref, inView } = useInView();

    return (
        <div ref={ref} className="w-full flex justify-center pb-10">
            <div className="md:w-9/12 w-full flex flex-col md:px-0 px-6 mt-10">
                <motion.h4
                    className="md:text-6xl text-4xl font-black text-[#f37f66] mt-4 md:self-start self-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Technologies
                </motion.h4>
                <FrontEnd />
                <BackEnd />
                <Tools />
                <Design />
                <Communication />
                <SoftSkills />
            </div>
        </div>
    );
}

export default TechSection;