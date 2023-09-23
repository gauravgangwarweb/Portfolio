import { motion, transform } from "framer-motion";
import { useInView } from 'react-intersection-observer'
import supabase from "../assets/supabese";
import { useEffect, useState } from "react";

const About = () => {
    const { ref, inView } = useInView();
    const [about, setAbout] = useState("")
    const getData = async () => {
        const res = await supabase.from("about").select("*")
        setAbout(res.data[0].data)
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <motion.div
            ref={ref}
            className="bg-cover w-full flex justify-center pb-10"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: [0, 1], opacity: 1 } : ""}
            transition={{ duration: 0.5 }}
        >
            <div className="md:w-3/4 flex justify-between w-full">
                <div className="md:w-9/12 flex flex-col md:px-0 px-2">
                    <h3
                        className="md:text-6xl text-5xl font-black text-[#f37f66] mt-4 md:self-start self-center"
                    >
                        About Me
                    </h3>
                    <p className="text-black text-xl tracking-normal word-spacing font-normal mt-5 md:w-11/12 w-full md:self-start text-center md:text-start">{about}</p>
                </div>
                <motion.div 
                className="md:w-1/4 p-5 md:flex hidden"
                initial={{x: 100}}
                animate={inView ? {x: 0}: ""}
                transition={{duration: 0.5}}
                >
                    <img src="gaurav-logo.png" alt="logo" className="mt-3" />
                </motion.div>
            </div>
        </motion.div>
    );
}

export default About;