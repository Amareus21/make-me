import Parrafo from "./components/parrafo";
import Titulo from "./components/titulo";
import TituloPrincipal from "./components/titulo_principal";
import Line from "./components/line";
export default function Home() {
  return (
    <main className="flex flex-col justify-start items-center md:pt-36 pt-24 min-h-screen full w-full">
      <header>
        <TituloPrincipal
          animation={`animate-parpadeo`}
          textSize={
            "sm:text-9xl 2xl:text-[19rem] xl:text-[15rem] lg:text-[12rem] md:text-[9rem]"
          }
        >
          Make Me
        </TituloPrincipal>
      </header>
      <div className={`grow flex items-center md:px-4 py-4 pb-16`}>
        <section className="md:max-w-screen-lg md:px-8 px-4 py-10 rounded-sm animate-fade animate-duration-[300ms] animate-ease-linear animate-delay-[4500ms]">
          <Titulo>Bienvenido</Titulo>
          <Line color="bg-[#00ffcc]" />
          <Parrafo>
            Hola, me llamo Amarok y tengo 10 años. Me encanta la programación y
            estoy aprendiendo Python, un lenguaje muy divertido y potente. Con
            Python puedo hacer muchas cosas, como crear juegos, aplicaciones,
            gráficos y mucho más.
          </Parrafo>
          <Parrafo>
            También me gusta crear videojuegos en Scratch, una plataforma online
            donde puedes programar tus propias historias, animaciones y juegos
            interactivos. Scratch es muy fácil de usar y puedes compartir tus
            proyectos con otros usuarios.
          </Parrafo>
          <Parrafo>
            Espero que te guste mi página web y que te diviertas.
            <br />
            ¡Gracias por visitarme!
          </Parrafo>
        </section>
      </div>
    </main>
  );
}
