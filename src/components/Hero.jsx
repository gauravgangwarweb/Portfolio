import { motion, transform} from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from 'react-intersection-observer'

const Hero = () => {
    const { ref, inView } = useInView();
    const designations = ["Full Stack Web Developer", "Software Developer", "Frontend Developer", "Backend Developer"]

    return (
        <div ref={ref} className="w-full h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col">
                <motion.h4
                    className="md:text-4xl text-2xl font-black caveat md:self-start self-center"
                    initial={{ x: -100, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 }: ""}
                    transition={{ duration: 1 }}
                >
                    Hii 👋 I'm
                </motion.h4>
                <motion.h2
                    className="md:text-8xl text-6xl font-black skranji text-[#f37f66] mt-4 text-center md:text-start"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    GAURAV GANGWAR
                </motion.h2>
                <motion.p
                    className="md:text-4xl text-xl text-black self-center font-medium mt-4 flex gap-3 signika"
                    initial={{scale: 0, opacity: 0}}
                    animate={{scale:[0,1], opacity: 1}}
                    transition={{duration: 1, delay: 1.5}}    
                >
                    I'm a
                    <span className="text-blue-900">
                        <Typewriter words={designations} loop={false} cursor typeSpeed={90} />
                    </span>
                </motion.p>
            </div>
        </div>
    );
}

export default Hero;