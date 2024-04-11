import Image from "next/image";
import { FaVuejs, FaNodeJs, FaCcStripe } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa6";
import { SiMysql, SiBinance } from "react-icons/si";
import { TbApi } from "react-icons/tb";

export default function Experience(){
    return (
    <div className="bg-white rounded-xl p-4 shadow-md">
        <h1 className="text-xl text-[#4F4F4F] font-medium">Experiencias</h1>
        <div className="mt-6">
            <div className="flex gap-4 md:flex-row flex-col">
                <div className="min-w-[65px]">
                    <Image 
                    alt="Linetor"
                    width={84}
                    height={84}
                    src={'/linetor.png'}/>
                </div>
                <div className="flex flex-col">
                    <span className="text-[#828282] text-xs">Enero 2022 - Septiembre 2022</span>
                    <strong className="text-sm text-[#333333] mt-1">Full Stack developer</strong>
                    <p className="text-sm mb-4 text-[#828282] font-medium mt-6">
                        En el desarrollo de una web junto a otro programador, me encargué de funcionalidades tanto del backend como del frontend.
                    </p>
                    <hr />
                    <div className="flex gap-4 ">
                        <FaVuejs size={24} color={'green'} />
                        <FaNodeJs size={24} color={'green'} />
                    </div>
                </div>
            </div>

            <div className="flex gap-4 md:flex-row flex-col mt-4 ">
                <div className="min-w-[65px]">
                    <Image 
                    alt="Linetor"
                    width={84}
                    height={84}
                    src={'/financeprobooks.png'}/>
                </div>
                <div className="flex flex-col">
                    <span className="text-[#828282] text-xs">Octubre 2022 - Diciembre 2022</span>
                    <strong className="text-sm text-[#333333] mt-1">Full Stack developer</strong>
                    <p className="text-sm mb-4 text-[#828282] font-medium mt-6">
                        Implementé un sistema de roles, subscripciones con Stripe y una interfaz de administración para crear nuevas entradas, utilizando el paradigma MVC.
                    </p>
                    <hr />
                    <div className="flex gap-4 ">
                        <FaLaravel size={24} color={'#f72c1f'} />
                        <FaCcStripe  size={24} color={'#635bff'} />
                        <SiMysql size={24} color={'#00718b'} />
                    </div>
                </div>
            </div>

              <div className="flex gap-4 md:flex-row flex-col mt-4">
                <div className="min-w-[65px]">
                    <Image 
                    alt="Linetor"
                    width={84}
                    height={84}
                    src={'/seguidormarket.png'}/>
                </div>
                <div className="flex flex-col">
                    <span className="text-[#828282] text-xs">Enero 2023 - Marzo 2023</span>
                    <strong className="text-sm text-[#333333] mt-1">Full Stack developer</strong>
                    <p className="text-sm mb-4 text-[#828282] font-medium mt-6">
                        La web se desarrolló de forma completa, implementando métodos de pago con Stripe, Payeer y Binance Pay. Utilizando webhooks, si el pago se realizaba correctamente, se realizaba una petición HTTP POST a una API externa.

                    </p>
                    <hr />
                    <div className="flex gap-4 ">
                        <FaLaravel size={24} color={'#f72c1f'} />
                        <FaCcStripe  size={24} color={'#635bff'} />
                        <SiMysql size={24} color={'#00718b'} />
                        <TbApi size={24} />
                        <SiBinance size={24} color={'#ffff00'} />

                    </div>
                </div>
            </div>
        </div>
    </div>)
}