import Header from '@/template-parts/partials/Header/Header';
import '@/template-parts/partials/Header/Header.scss';


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
      </body>
    </html>
  );
}