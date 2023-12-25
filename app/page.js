import Image from "next/image";
import { Fira_Code } from "next/font/google";
const fira = Fira_Code({weight:['600'], subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen h-screen flex-col items-center ">
      <header className="md:container max-w-full mx-auto text-7xl py-20 xl:text-[20rem] lg:text-[15rem] md:text-[10rem] flex justify-center ">
        <h1
          style={{ textShadow: "-3px 0px 0px rgba(0,0,0,0.5)" }}
          className="bg-nintendo bg-clip-text text-transparent w-max object-cover bg-center backdrop-filter backdrop-blur-lg"
        >
          Make me
        </h1>
      </header>
      <div className="md:container mx-auto md:gap-10 flex md:flex-row flex-col max-w-full justify-start p-2 ">
        <div className="w-full md:w-1/2">
          <iframe
            src="https://scratch.mit.edu/projects/922045006/embed"
            allowtransparency="true"
            width="100%"
            height="402"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div className={`${fira.className}`}>
          <h2 className=" p-2 text-lg">
            Si Quereis verlo en scratch aqui teneis el enlace (recomendado para
            tabletas y moviles)
          </h2>
        </div>
      </div>
    </main>
  );
}
