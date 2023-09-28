import { useDispatch, useSelector } from "react-redux";

const ProjectPopUp = (props) => {
    const dispatch = useDispatch()
    const demo = {
        name: "Music App",
        image: "https://i.imgur.com/h8YHE3E.png",
        desc: "A music web app powered by Next.js and styled with Tailwind CSS, offering a user-friendly and responsive platform for discovering, playing, and enjoying music.",
        source: "https://github.com/gauravgangwarweb/Music-Web",
        demo: "https://music-anu.netlify.app/"
    }
    return (
        <div className="fixed bg-anim2 flex justify-center items-center w-full h-screen overflow-hidden">
            <div className="w-1/2 flex flex-col justify-center items-center fixed px-5 pt-3 pb-5 bg-white">
                <i className="fa-solid fa-circle-xmark absolute fa-2x -top-7 -right-9 hover:text-[#f37f66] cursor-pointer"></i>
                <h3 className="text-4xl font-extrabold text-[#f37f66]">{demo.name}</h3>
                <img
                    src={demo.image}
                    alt={demo.name}
                    className="mt-3 rounded-lg"
                />
                <p className="mt-2 text-lg">{demo.desc}</p>
                <button
                    className="flex items-center justify-center gap-1 text-2xl font-bold border-2 border-[#f37f66] py-1 w-full mt-2 hover:bg-[#f37f66] hover:text-white rounded-lg"
                >
                    <i className="fa-brands fa-github"></i>
                    <span>Github</span>
                </button>
                <button
                    className="flex items-center justify-center gap-1 text-2xl font-bold border-2 border-[#f37f66] py-1 w-full mt-2 hover:bg-[#f37f66] hover:text-white rounded-lg"
                >
                    <i className="fa-solid fa-globe"></i>
                    <span>Live Demo</span>
                </button>
            </div>
        </div>
    );
}

export default ProjectPopUp;