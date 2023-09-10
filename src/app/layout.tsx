import "./globals.css";
import type { Metadata } from "next";
import "../styles/global.scss";

export const metadata: Metadata = {
    title: "Praktikumsbericht Taisiia Barabash",
    description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="de">
            <body>{children}</body>
        </html>
    );
}
