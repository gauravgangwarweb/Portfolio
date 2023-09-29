import { useEffect, useState } from "react";
import supabase from "../assets/supabese";
import { useInView } from 'react-intersection-observer'
import { motion } from "framer-motion";

const SoftSkills = () => {
    const { ref, inView } = useInView();
    const [tech, setTech] = useState()
    const [loading, setLoading] = useState(true)
    const getData = async () => {
        try {
            const res = await supabase.from("soft-skills").select("*")
            setTech(res.data)
            setLoading(false)
        } catch (error) {
            console.log("There was some error in fetching data")
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }} 
            animate={inView ? { opacity: 1, x: 0 } : ""}
            transition={{ duration: 1 }}
            ref={ref}
        >
            <h5 className="md:text-4xl text-2xl font-bold caveat md:mt-20 mt-10">Soft Skills</h5>
            <div className="flex flex-wrap justify-start mt-5 gap-10">
                {
                    loading ? (
                        <p>Loading</p>
                    ) : (
                        tech.map((e) => (
                            <motion.div
                                className="flex flex-col items-center border px-3 py-1 rounded-xl bg-black/10 backdrop-blur-xl"
                                key={e.id}
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : ""}
                                transition={{ duration: 1, delay: 0.2 }}
                            >
                                <p className="text-center font-medium">{e.name}</p>
                            </motion.div>
                        ))
                    )
                }
            </div>
        </motion.div>
    );
}

export default SoftSkills;