import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Anton } from "next/font/google"
import { Toaster } from "@/components/ui/toaster";

const anton = Anton({
    subsets: ["latin"],
    weight: ["400"],
})

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ToDone.",
  description: "Manage your task in effecient way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(barlow.className, 'grainy')}>
        <Toaster />
        {children} 
      </body>
    </html>
  );
}
