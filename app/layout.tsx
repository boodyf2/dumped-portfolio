import { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

import { Open_Sans } from "next/font/google";

export const metadata: Metadata = {
    title: "Abdalrahman's Portfolio",
    description: "My modern and minimal Front-end portfolio",
};

const OpenSans = Open_Sans({
    subsets: ["latin"],
});

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={OpenSans.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
