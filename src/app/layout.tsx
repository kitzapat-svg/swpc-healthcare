import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import NavigationProgressBar from "@/components/ui/NavigationProgressBar";

export const metadata: Metadata = {
  title: "งานเภสัชกรรมปฐมภูมิ - อำเภอสวรรคโลก",
  description: "ระบบบริหารจัดการงานเภสัชกรรมปฐมภูมิ และการคุ้มครองผู้บริโภคด้านสุขภาพ (คบส.) อำเภอสวรรคโลก",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Sarabun:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-['Sarabun',_sans-serif]">
        <Suspense fallback={null}>
          <NavigationProgressBar />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
