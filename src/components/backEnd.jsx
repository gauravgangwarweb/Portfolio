import { useEffect, useState } from "react";
import supabase from "../assets/supabese";
import { motion, transform } from "framer-motion";

const BackEnd = () => {
    const [tech, setTech] = useState()
    const [loading, setLoading] = useState(true)
    const getData = async () => {
        try {
            const res = await supabase.from("back-end").select("*")
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
        <div>
            <h5 className="md:text-4xl text-2xl font-bold caveat md:mt-20 mt-10">Back-End</h5>
            <div className="flex justify-start mt-5 gap-10">
                {
                    loading ? (
                        <p>Loading</p>
                    ) : (
                        tech.map((e) => (
                            <motion.div
                                className="flex flex-col items-center"
                                key={e.id}
                            >
                                <img src={e.icon} alt={e.name} className="md:w-20 w-10" />
                                <p className="text-center font-medium">{e.name}</p>
                            </motion.div>
                        ))
                    )
                }
            </div>
        </div>
    );
}

export default BackEnd;