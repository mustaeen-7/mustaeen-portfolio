import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mustaeen Portfolio",
  description: "Developer with unique ideas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/profile-pic.png" />
      </head>
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
