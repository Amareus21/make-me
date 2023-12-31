import "./globals.css";
import Menu from "./components/header";
import { audiowave } from "./fonts";

export const metadata = {
  title: "Make Me",
  description: "Pagina web del grupo de desarollo de juegos Make me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${audiowave.className}`}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
