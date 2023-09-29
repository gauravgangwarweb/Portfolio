import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import { useEffect, useState } from 'react';
import supabase from "../assets/supabese";
import ProjectPopUp from './ProjectPopUp';
import { useSelector } from 'react-redux';

const ProjectSection = () => {
    const hide = useSelector(state => state.hide.hide)
    const { ref, inView } = useInView();
    const [projects, setProjects] = useState()
    const [loading, setLoading] = useState(true)
    const getData = async () => {
        try {
            const res = await supabase.from("projects").select("*")
            setProjects(res.data)
            setLoading(false)
        } catch (error) {
            console.log("There was some error in fetching data")
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div ref={ref} className="w-full flex flex-col justify-center items-center pb-10 relative">
            <div className="md:w-9/12 w-full flex flex-col md:px-0 px-6 mt-10">
                <motion.h4
                    className="md:text-6xl text-4xl font-black text-[#f37f66] mt-4 md:self-start self-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Projects
                </motion.h4>
                <div className="w-full grid md:grid-cols-2 grid-cols-1 mt-16 gap-10">
                    {
                        loading ? (
                            <p>Loading</p>
                        ) : (
                            projects.map((e) => (
                                <ProjectCard id={e.id} name={e.name} image={e.image} data={e} />
                            ))
                        )
                    }
                </div>
            </div>
            {hide ? "" : <ProjectPopUp />}
        </div>
    );
}

export default ProjectSection;