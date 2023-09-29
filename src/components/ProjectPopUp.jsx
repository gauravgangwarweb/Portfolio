import { useDispatch, useSelector } from "react-redux";
import { setHide } from "../redux/hide";
import { useRef, useState } from "react"; // Import useState
import { motion, useInView } from "framer-motion";

const ProjectPopUp = (props) => {
    const hide = useSelector((state) => state.hide.hide);
    const ref = useRef();
    let isInView = useInView(ref);
    console.log(isInView);
    const data = useSelector((state) => state.selectedPrj.selectedPrj);
    console.log(data);
    const dispatch = useDispatch();

    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            dispatch(setHide(true));
        }, 200);
    };

    return (
        <div
            ref={ref}
            className="fixed top-0 left-0 bg-anim2 flex justify-center items-center w-full h-screen overflow-hidden z-30 md:px-0 px-4"
        >
            <motion.div
                className="md:w-1/2 flex flex-col justify-center items-center relative px-5 pt-3 pb-5 bg-white"
                initial={{ scale: 0, opacity: 0 }}
                animate={isClosing ? { scale: 0, opacity: 0 } : isInView ? { scale: 1, opacity: 1 } : ""}
                transition={{ duration: 0.5 }}
            >
                <i
                    onClick={handleClose}
                    className="fa-solid fa-circle-xmark absolute fa-2x -top-4 -right-4 hover:text-[#f37f66] cursor-pointer"
                ></i>
                <h3 className="text-4xl font-extrabold text-[#f37f66]">
                    {data.name}
                </h3>
                <img src={data.image} alt={data.name} className="mt-3 rounded-lg" />
                <p className="mt-2 text-lg">{data.desc}</p>
                <a
                    className="flex items-center justify-center gap-1 text-2xl font-bold border-2 border-[#f37f66] py-1 w-full mt-2 hover:bg-[#f37f66] hover:text-white rounded-lg cursor-pointer"
                    href={data.source}
                    target="_blank"
                >
                    <i className="fa-brands fa-github"></i>
                    <span>Source</span>
                </a>
                <a
                    className="flex items-center justify-center gap-1 text-2xl font-bold border-2 border-[#f37f66] py-1 w-full mt-2 hover:bg-[#f37f66] hover:text-white rounded-lg"
                    href={data.demo}
                    target="_blank"
                >
                    <i className="fa-solid fa-globe"></i>
                    <span>Live Demo</span>
                </a>
            </motion.div>
        </div>
    );
};

export default ProjectPopUp;
