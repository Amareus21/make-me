export default function TituloPrincipal({ children, className }) {
  return (
    <h1
      style={{
        textShadow: [
          "0px 0px 10px #ff3399",
          "0px 0px 20px #ff3399",
          "0px 0px 35px #ff3399",
        ],
      }}
      className={`${className} bg-clip-text flex items-center w-max text-[3rem]`}
    >
      {children}
    </h1>
  );
}
