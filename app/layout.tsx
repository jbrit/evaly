import "./globals.css";
import { Public_Sans } from "next/font/google";

export const metadata = {
  title: "Evaly",
  description: "Evaly Web Application",
};
const publicSans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={publicSans.className}>{children}</body>
    </html>
  );
}
