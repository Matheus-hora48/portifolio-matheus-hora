import "../styles/globals.css";

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
      <body>{children}</body>
    </html>
  );
}
