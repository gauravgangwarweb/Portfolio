import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
    const ref = useRef()
    const isInVIew = useInView(ref)
    console.log(isInVIew);
    return (
        <div ref={ref} className="w-full flex flex-col justify-center items-center pb-32 relative">
            <div className="md:w-9/12 w-full flex flex-col md:px-0 px-6 mt-10 h-full">
                <motion.h4
                    className="md:text-6xl text-4xl font-black text-[#f37f66] mt-4 md:self-start self-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Contact
                </motion.h4>
                <div className="flex w-full justify-between h-full mt-16">
                    <div className="w-3/6 mt-9">
                        <p className="text-xl leading-normal">Ready to turn ideas into action or simply share a cup of coffee and conversation? <br /> Reach out, and let's explore the possibilities together!</p>
                        <div className="flex gap-5 mt-5 px-1">
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
                    </div>
                    <div className="w-5/12">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;