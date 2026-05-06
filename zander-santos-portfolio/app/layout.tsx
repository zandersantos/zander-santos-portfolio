import Header from "@/components/Header";
import { Metadata } from "next";
import "./globals.css";

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
      <body className="min-h-full flex flex-col">
        <Header/>
        {children}
      </body>
    </html>

  );
}
