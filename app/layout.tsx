import Header from "@/app/components/header"
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header/>
        <main>{children}</main>
      </body>
    </html>
  );
}
