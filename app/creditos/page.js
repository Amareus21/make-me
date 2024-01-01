import TituloPrincipal from "../components/titulo_principal";
import Line from "../components/line";
import Titulo from "../components/titulo";
import Parrafo from "../components/parrafo";
export default function Creditos() {
  return (
    <main className="flex justify-center min-h-screen w-full bg-black">
      <div
        className={`2xl:container w-full grid grid-cols-1 z-10 h-max md:pt-36 pt-24 pb-6 px-1`}
      >
        <div className="flex flex-col  rounded-sm md:px-8 px-4 gap-5 ">
          <TituloPrincipal textSize="md:text-7xl">Creditos</TituloPrincipal>
          <Line className="bg-[#ff3399]" />
          <Titulo>Jefes/as</Titulo>
          <Line className="bg-[#00ffcc] 2xl:w-1/3 w-[325px]"/>
          <Parrafo>Jefes principal: Àmarok</Parrafo>
          <Parrafo>Jefa de artes y animaciones: Alicia</Parrafo>
          <Titulo>Curadores</Titulo>
          <Line className="bg-[#00ffcc] 2xl:w-1/3 w-[325px]"/>
          <Parrafo>Martí</Parrafo>
          <Parrafo>Noah</Parrafo>
          <Titulo>Programadores</Titulo>
          <Line className="bg-[#00ffcc] 2xl:w-1/3 w-[325px]"/>
          <Parrafo>Àmarok</Parrafo>
          <Parrafo>Miguel</Parrafo>
          <Parrafo>Martí</Parrafo>
          <Parrafo>Daniel</Parrafo>
          <Titulo>Creadores de series</Titulo>
          <Line className="bg-[#00ffcc] 2xl:w-1/3 w-[325px]"/>
          <Parrafo>Martí</Parrafo>
          <Parrafo>Leo</Parrafo>
          <Parrafo>Daniel</Parrafo>
          <Titulo>Artes y animaciones</Titulo>
          <Line className="bg-[#00ffcc] 2xl:w-1/3 w-[325px]"/>
          <Parrafo>Alicia</Parrafo>
          <Parrafo>Emma.E</Parrafo>
          <Parrafo>Emma.M</Parrafo>
          <Parrafo>Mar</Parrafo>
        </div>
      </div>
    </main>
  );
}
