import Line from "@/app/components/line";
import Parrafo from "@/app/components/parrafo";
import Titulo from "@/app/components/titulo";
import TituloPrincipal from "@/app/components/titulo_principal";
import Link from "next/link";

export default function PanelJuegos({ tituloPrincipal, titulo, src, texto }) {
  return (
    <div className="py-5">
      <TituloPrincipal className="md:text-7xl py-5">
        {tituloPrincipal}
      </TituloPrincipal>
      <Line className="bg-[#ff3399] mb-8" />
      <div className="flex flex-col xl:flex-row lg:items-start items-center gap-5 justify-between">
        <iframe
          src={src}
          allowtransparency="true"
          width="485"
          height="402"
          className="w-full h-[402px] xl:w-[485px]"
        ></iframe>
        <div className="basis-1/2">
          <Titulo>{titulo}</Titulo>
          <Line className="bg-[#00ffcc]" />
          <Parrafo>{texto}<br/><Link
              className="text-red-500 "
              download={"PioPioSetup.exe"}
              href="/PioPioSetup.exe"
            >
              Download
            </Link></Parrafo>
        </div>
      </div>
    </div>
  );
}
