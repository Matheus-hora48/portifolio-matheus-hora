import Navbar from "@/components/navbar/navbar";
import "../styles/globals.css";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: {
    default: "Portfólio de Matheus Hora",
    template: "%s | Portfólio de Matheus Hora",
  },
  robots: {
    index: true,
    follow: true,
  },
  description:
    "Explore o portfólio de Matheus Hora e veja seus trabalhos e projetos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
