export default function Titulo({ children }) {
  return (
    <h2
      className="bg-clip-text text-[#00ffcc] opacity-95 2xl:text-4xl md:text-3xl text-2xl "
      style={{
        textShadow: ["0px 0px 3px #00ffcc"],
      }}
    >
      {children}
    </h2>
  );
}
