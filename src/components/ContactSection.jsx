import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
    const ref = useRef()
    const isInVIew = useInView(ref)
    return (
        <div ref={ref} className="w-full flex justify-center items-center md:pb-36 pb-20 relative">
            <div className="md:w-9/12 w-full flex flex-col md:px-0 px-4 mt-10 h-full">
                <motion.h4
                    className="md:text-6xl text-4xl font-black text-[#f37f66] mt-4 md:self-start self-center"
                >
                    Contact
                </motion.h4>
                <div className="flex md:flex-row flex-col w-full justify-between h-full md:mt-16">
                    <motion.div
                        className="md:w-3/6 w-full mt-9"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInVIew ? { opacity: 1, x: 0 } : ""}
                        transition={{ duration: 1 }}
                    >
                        <motion.p
                            className="text-xl leading-normal md:text-start text-center w-full"
                            initial={{ opacity: 0 }}
                            animate={isInVIew ? { opacity: 1 } : ""}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Ready to turn ideas into action or simply share a cup of coffee and conversation? <br />
                            Reach out, and let's explore the possibilities together!
                        </motion.p>
                        <div className="flex md:justify-start justify-center gap-5 mt-5 px-1">
                            <a href="mailto:contact@gauravgangwarweb.me" type="email">
                                <i className="fa-solid fa-envelope fa-2x hover:text-[#f37f66]"></i>
                            </a>
                            <a href="" target="_blank">
                                <i className="fa-brands fa-linkedin fa-2x hover:text-[#f37f66]"></i>
                            </a>
                            <a href="https://github.com/gauravgangwarweb" target="_blank">
                                <i className="fa-brands fa-github fa-2x hover:text-[#f37f66]"></i>
                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        className="md:w-5/12 w-full md:mt-0 mt-16"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInVIew ? { opacity: 1, x: 0 } : {opacity: 0, x: 0}}
                        transition={{ duration: 1 }}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;