import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Hanuman Printers — Wedding & Business Cards | Shankarpally, Hyderabad",
  description:
    "Hanuman Printers, Shankarpally, Hyderabad. Premium wedding invitation cards, business cards & bulk card printing. Market Road, opposite Adarsh Bank. Call 7660904545.",
  keywords: [
    "Hanuman Printers",
    "wedding invitation cards Hyderabad",
    "business cards Shankarpally",
    "bulk card printing",
    "printers Shankarpally",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#1a0f02] text-[#fff7e6]">
        {children}
      </body>
    </html>
  );
}
