import { orbitron } from "../fonts";
export default function Parrafo({ children }) {
    return <p className={` ${orbitron.className} whitespace-pre-wrap text-pretty opacity-95 2xl:text-xl xl:text-lg md:text-xl text-base pb-2 text-[rgba(255,255,255,0.8)]`}>
      {children}
    </p>;
  }