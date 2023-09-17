import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "./Reuseablecomponents/Sidebar";
import TopHeader from "./Reuseablecomponents/TopHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Front-end Test",
  description: "Mohaiminur Rahman Mukta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-start items-start">
          <Sidebar />
          <div className="p-5 w-full">
            <TopHeader />
            <div className="w-full">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
