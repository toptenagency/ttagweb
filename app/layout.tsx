import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import React from "react";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { HomeHeader } from "@/components/sections/home-header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const RootLayout = ({ children }: any) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HomeHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
