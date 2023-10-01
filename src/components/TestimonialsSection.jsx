import { useInView } from 'react-intersection-observer';
import supabase from "../assets/supabese";
import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';
import { useEffect, useState } from 'react';

const TestimonialSection = () => {
    const { ref, inView } = useInView()
    const [testi, setTesti] = useState()
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        try {
            const res = await supabase.from("testimonials").select("*")
            setTesti(res.data)
            setLoading(false)
        } catch (error) {
            console.log("There was some error in fetching data")
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div ref={ref} className="w-full flex justify-center pb-10 mt-16">
            <div className="flex md:w-3/4 flex-col justify-between w-full">
                <h3
                    className="md:text-6xl text-5xl font-black text-[#f37f66] mt-4 md:self-start self-center"
                >
                    Testimonials
                </h3>
                <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-10 mt-16 md:px-0 px-4">
                    {
                        loading ? (
                            <p>Loading</p>
                        ) : (
                            testi.map((e) => (
                                <TestimonialCard key={e.id} id={e.id} name={e.name} image={e.image} desig={e.desig} desc={e.desc} />
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default TestimonialSection;