import { dataJuegos } from "./data";
import PanelJuegos from "./ui/panelJuegos";
export default function MisJuegos() {
  return (
    <main className="realtive z-20 flex justify-center min-h-screen w-full bg-black">
      <div
        className={`2xl:container grid grid-cols-1 z-10 h-max md:pt-36 pt-24 md:px-8 px-4 gap-5 pb-6 `}
      >
        {dataJuegos.map((data) => (
          <PanelJuegos
            key={data.key}
            titulo={data.titulo}
            tituloPrincipal={data.tituloPrincipal}
            src={data.src}
            texto={data.texto}
          />
        ))}
      </div>
    </main>
  );
}
