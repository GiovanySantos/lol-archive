import "./globals.css";
import { EB_Garamond } from "next/font/google";

const EB = EB_Garamond({ subsets: ["latin"] });

export const metadata = {
  title: "League of Legends Archive",
  description: "Archive for league of legends characters",
};

export default function RootLayout({ children }) {
  return (
    <html lang='pt-br'>
      <body className={EB.className}>{children}</body>
    </html>
  );
}

