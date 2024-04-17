/* eslint-disable @next/next/no-img-element */
import { FaReact, FaVuejs } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

export default function FrontendSkills(){
    return (
        <div className="bg-white dark:bg-[#374151] rounded-xl p-4 shadow-md h-[180px] overflow-auto">
           <h3 className="font-semibold text-[#4F4F4F] dark:text-white">Frontend Skills</h3>
           <div className="flex flex-wrap gap-3 mt-2">
            <img
            alt="html 5"
            width={48}
            height={48}
            src={'/html-5.png'} />

            <img
            alt="css 3"
            width={48}
            height={48}
            src={'/css-3.png'} />

            <img
            alt="css 3"
            width={48}
            height={48}
            src={'/js.png'} />

            <img
            alt="css 3"
            width={48}
            height={48}
            src={'/api.png'} />
            <FaReact size={48} color={'#5ed3f3'} />
            <FaVuejs size={48} color={'green'} />
            <SiRedux size={48} color={'#7747bc'}/>

           </div>
        </div>
    )
}