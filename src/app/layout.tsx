import type { Metadata } from "next";
import { Preloader } from "@/components/Preloader";
import "./globals.css";

export const metadata: Metadata = {
    title: "Eyad Ryad",
    description: "The portfolio and selected work of Eyad Ryad, a real estate marketing expert.",
    openGraph: { title: "Eyad Ryad", description: "Selected work and signature projects by Eyad Ryad.", type: "website" },
    icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return <html lang="en" className="scroll-smooth motion-reduce:scroll-auto bg-page">
        <body className="bg-page text-ink font-sans">
            <Preloader />{children}
        </body>
    </html>;
}