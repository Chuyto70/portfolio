/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { FaReact, FaVuejs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaNodeJs, FaLaravel, FaPython } from "react-icons/fa";
import { BiLogoPhp } from "react-icons/bi";
import { FcLinux } from "react-icons/fc";


export default function BackendSkills(){
    return (
        <div className="bg-white rounded-xl p-4 shadow-md h-[180px] overflow-auto">
           <h3 className="font-semibold text-[#4F4F4F]">Backend Skills</h3>
           <div className="flex flex-wrap gap-3 mt-2">
            <SiMysql size={48}/>
            <FaNodeJs size={48} color={'green'}/>
            <BiLogoPhp size={48} color={'#1f222e'}/>
            <FaLaravel size={48} color={'#ff2d20'} /> 
            <FcLinux size={48} /> 
            <FaPython size={48} /> 
           </div>
        </div>
    )
}