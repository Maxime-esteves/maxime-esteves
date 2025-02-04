import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import "app/globals.css";

export const metadata: Metadata = {
  title: "Maxime Esteves - Developper",
  description: "Développeur en reconversion en recherche d'alternance",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning className="dark scroll-smooth">
      <body className={cn(GeistSans.variable, "font-sans h-full bg-background text-foreground")}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

