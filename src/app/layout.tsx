import { Cairo } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";

// تحميل خط Cairo مع دعم الحروف العربية واللاتينية
const cairo = Cairo({ subsets: ["latin", "arabic"] });

export const metadata: Metadata = {
  title: "Light Saas Landing Page",
  description: "Template created by Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" className="relative">
      {" "}
      {/* تحديد اللغة العربية */}
      <body className={clsx(cairo.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
