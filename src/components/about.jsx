import { motion, transform } from "framer-motion";
import { useInView } from 'react-intersection-observer'

const About = () => {
    const { ref, inView } = useInView();

    return ( 
        <div ref={ref} className="w-full h-screen flex justify-center py-5">
            <motion.div
             className="w-11/12 hand-border flex md:flex-row-reverse flex-col"
             initial={{scale: 0}}
             animate={inView ? {scale: 1} : {scale: 0}}
             transition={{duration: 0.5}}
             >
                <div>
                    <p></p>
                </div>
                <div className="flex justify-center">
                    <img src="Profilepic.png" alt="profile-pic" className="w-52 mt-2" />
                </div>
             </motion.div>
        </div>
    );
}

export default About;