import Parrafo from "../components/parrafo";
import Titulo from "../components/titulo";
import TituloPrincipal from "../components/titulo_principal";
import Line from "../components/line";
export default function MisJuegos() {
  return (
    <main className="flex justify-center min-h-screen w-full bg-black">
      <div
        className={`2xl:container grid grid-cols-1 z-10 h-max md:pt-36 pt-24 pb-6 px-1`}
      >
        <div className="flex flex-col rounded-sm md:px-8 px-4 gap-5 ">
          <TituloPrincipal textSize="md:text-7xl">
            Pio Pio
          </TituloPrincipal>
          <Line className="bg-[#ff3399]"/>
          <div className="flex flex-col xl:flex-row lg:items-start items-center gap-5 justify-between">
            <iframe
              src="https://scratch.mit.edu/projects/922045006/embed"
              allowtransparency="true"
              width="485"
              height="402"
              className="w-full h-[402px] xl:w-[485px]"
            ></iframe>
            <div className="basis-1/2">
              <Titulo>Instrucciones</Titulo>
              <Line className="bg-[#00ffcc]"/>
              <Parrafo>
                Pollito azul:
                <br />W para moverte hacia delante. A para moverte hacia la
                izquierda. S para moverte hacia a bajo. D para moverte hacia la
                derecha. E para disparar.
              </Parrafo>
              <Parrafo>
                Pollito rojo:
                <br />
                Las flechas y el espacio para disparar.
              </Parrafo>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
