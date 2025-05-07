import Image from "next/image";
import { IoIosMail, IoMdCall } from "react-icons/io";
export default function Profile() {
  return (
    <div className="bg-white dark:bg-[#374151] rounded-xl p-4 shadow-md flex flex-col items-center">
      <div className="flex items-center">
        <Image
          className="rounded-xl"
          alt="Imagen de perfil"
          width={320}
          height={292}
          priority
          src={"/profile_image_ofuscade.png"}
        />
      </div>
      <h3 className="font-semibold text-[#4F4F4F] dark:text-white mt-3">
        Jesús Hurtado 👋
      </h3>
      <span className="text-xs text-[#828282] dark:text-white font-medium mb-6">
        Full-Stack Developer
      </span>

      <div className="flex mt-6 items-center gap-2">
        <IoIosMail size={24} className="dark:text-white " />
        <span className="text-[#4F4F4F] dark:text-white font-medium">
          jjhurtado016@gmail.com
        </span>
      </div>
      <div className="flex mt-2 items-center gap-2">
        <IoMdCall size={24} className="dark:text-white " />
        <span className="text-[#4F4F4F] dark:text-white font-medium">
          (+58) 414 952 3016
        </span>
      </div>

      <p className="text-[#828282] dark:text-white mt-4 text-center">
        Desarrollador motivado y dispuesto a aprender y crear aplicaciones de
        interfaz de usuario excepcionales o del lado del servidor.
      </p>
    </div>
  );
}
