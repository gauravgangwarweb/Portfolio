import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
    const ref = useRef()
    const isInVIew = useInView(ref)
    console.log(isInVIew);
    return (
        <div ref={ref} className="w-full flex flex-col justify-center items-center pb-10 relative">
            <div className="md:w-9/12 w-full flex flex-col md:px-0 px-6 mt-10">
                <motion.h4
                    className="md:text-6xl text-4xl font-black text-[#f37f66] mt-4 md:self-start self-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Contact
                </motion.h4>
            </div>
        </div>
    );
}

export default ContactSection;