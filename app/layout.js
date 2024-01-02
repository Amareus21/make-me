import "./globals.css";
import { audiowave } from "./fonts";
import { cookies } from "next/headers";
import NavigatorBar from "./components/navigation_bar";
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
        <NavigatorBar animation={animation} />
        {children}
      </body>
    </html>
  );
}
