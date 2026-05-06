import Header from "@/components/Header";
import { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Zander Santos | Developer Portfolio",
  description:
    "Developer portfolio showcasing projects, experience, education, and technical skills."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header/>
          {children}
        <div className="mt-auto">
          <Footer />
        </div>
      </body>
    </html>

  );
}
