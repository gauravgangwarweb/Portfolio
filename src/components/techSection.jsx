import { useEffect, useState } from "react";
import supabase from "../assets/supabese";
import FrontEnd from "./frontEnd";
import BackEnd from "./backEnd";
import Tools from "./tools";
import Design from "./design";
import Communication from "./communication";
import SoftSkills from "./softSkills";

const TechSection = () => {
    return (
        <div className="w-full h-screen flex justify-center">
            <div className="md:w-9/12 w-full flex flex-col md:px-0 px-6 mt-10">
                <h4 className="md:text-6xl text-4xl font-black text-[#f37f66] mt-4 md:self-start self-center">
                    Technologies
                </h4>
                <FrontEnd />
                <BackEnd />
                <Tools />
                <Design />
                <Communication />
                <SoftSkills />
            </div>
        </div>
    );
}

export default TechSection;