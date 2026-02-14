import Header from "@/template-parts/partials/Header/Header";
import Footer from "@/template-parts/partials/Footer/Footer";
import "@/template-parts/partials/Header/Header.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
