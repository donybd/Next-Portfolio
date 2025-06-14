import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Dony | Portofolio",
  description:
    "My name is Wahid, I'm a mobile developer and I'm passionate about it. I'm currently studying at Universitas Negeri Semarang.",
  author: "Wahid Hidayat",
  siteUrl: "https://wahid-hidayat.vercel.app/",
  applicationName: "Wahid",
  keywords: [
    "Wahid",
    "wahid",
    "wahid hidayat",
    "hidayat",
    "wahid h",
    "wahid unnes",
    "Wahid Hidayat",
    "wahid porto",
    "wahid unnes",
  ],
  openGraph: {
    type: "website",
    url: "https://wahid-hidayat.vercel.app/",
    title: "Wahid | Portofolio",
    description: "My name is Wahid, This is my portofolio website.",
    width: 1200,
    height: 630,
    images: [
      {
        url: "/og-image-rev.png",
        alt: "Wahid Portofolio",
      },
    ],
    site_name: "Dony | Portofolio",
  },
};

const TopProgressBar = dynamic(() => import("@/components/TopProgressbar"), {
  ssr: false,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopProgressBar />
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
