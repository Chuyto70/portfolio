import Image from "next/image";

export default function Hobbies(){
    return(
        <div className="bg-white dark:bg-[#374151] rounded-xl p-4 shadow-md mt-4">
            <h1 className="text-xl text-[#4F4F4F] font-medium">Hobbies</h1>

            <div>
                <div className="flex items-center mb-2">
                    <Image
                    className="rounded-xl"
                    alt="Imagen de perfil"
                    width={320}
                    height={100}
                    priority
                    src={'/cine.jpg'} />
                </div>
                 <strong className="text-lg text-[#333333]">Cine &#127916; </strong>
                 <p className="text-sm mb-4 text-[#828282] font-medium mt-2">
                        Me apasiona el cine, no importa si es una película de acción, una comedia o un drama.
                    </p>
            </div>

            <div>
                <div className="flex items-center mb-2">
                    <Image
                    className="rounded-xl"
                    alt="Imagen de perfil"
                    width={320}
                    height={100}
                    priority
                    src={'/gaming.jpg'} 
                    objectFit="contain"
                    />
                </div>
                 <strong className="text-lg text-[#333333]">Gaming &#127918; </strong>
                 <p className="text-sm mb-4 text-[#828282] font-medium mt-2">
                        Disfruto de jugar videojuegos en mi tiempo libre, especialmente los que son competitivos.
                    </p>
            </div>
        </div>
    )
}