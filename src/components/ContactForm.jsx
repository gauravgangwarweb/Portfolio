import { useForm, ValidationError } from '@formspree/react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ContactForm = () => {
    const ref = useRef()
    const isInVIew = useInView(ref)
    const [state, handleSubmit] = useForm("xyyqbeyk");
    if (state.succeeded) {
        return <p className="text-center text-red-600 text-lg font-semibold">Thanks for reaching me!</p>;
    }
    return (
        <form
            ref={ref}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            initial={{ opacity: 0 }}
            animate={isInVIew ? { opacity: 1 } : ""}
            transition={{ duration: 1, delay: 0.2 }}
        >
            <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                className="w-full px-2 py-2 rounded-md border border-black"
            />
            <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
            />
            <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-2 py-2 rounded-md border border-black"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
                className="w-full px-2 py-2 rounded-md border border-black h-20"
                placeholder="What would you like to say"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button
                type="submit"
                disabled={state.submitting}
                className="hover:bg-[#f37f66] bg-[#ff986b] py-2 rounded-md font-bold text-lg text-white"
            >
                Get In Touch
            </button>
        </form>
    );
}

export default ContactForm;