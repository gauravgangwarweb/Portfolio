import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const TestimonialCard = (props) => {
    const { ref, inView } = useInView();
    return (
        <motion.div
            ref={ref}
            key={props.id}
            className="px-3 py-4 bg-anim1 rounded-lg cursor-pointer"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : ""}
            transition={{ duration: 1, delay: 0.2 }}
        >
            <div className="flex items-center">
                <div>
                    <img src={props.image} alt={props.name} className="w-20 rounded-full" />
                </div>
                <div className="flex justify-center px-4">
                    <div>
                        <h4 className="text-lg font-semibold">{props.name}</h4>
                        <p>{props.desig}</p>
                    </div>
                </div>
            </div>
            <p className="px-2 mt-2">{props.desc}</p>
        </motion.div>
    );
}

export default TestimonialCard;