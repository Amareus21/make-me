import "./globals.css";
import Menu from "./components/header";
import { audiowave } from "./fonts";
import { cookies } from "next/headers";
export const metadata = {
  title: "Make Me",
  description: "Pagina web del grupo de desarollo de juegos Make me",
};

export default function RootLayout({ children }) {
  const cookie = cookies();
  const animation = cookie.get('animation')
  return (
    <html lang="es">
      <body className={`${audiowave.className}`}>
        <Menu animation={animation} />
        {children}
      </body>
    </html>
  );
}
