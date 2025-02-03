"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const Button = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Empêche les erreurs de rendu côté serveur

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-300 rounded-full p-1 transition-all duration-300 fixed max-md:mt-8 max-md:static"
    >
      <div
        className={`w-6 h-6 flex items-center justify-center rounded-full bg-black dark:bg-white shadow-md transform transition-all duration-300 ${
          theme === "dark" ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {theme === "dark" ? (
          <Sun className="text-yellow-400 w-4 h-4" />
        ) : (
          <Moon className="text-red-500 w-4 h-4" />
        )}
      </div>
    </button>
  );
};

export default Button;

export const Header = () => {
  return (
    <header className="ml-20  max-md:ml-0" >
      <nav className="flex space-x-10 mt-10 mr-20 mb-24 items-center max-md:mr-0 max-md:items-center max-md:flex-col max-md:gap-2 max-md:justify-center max-md:space-x-0">
        <Image
          className="w-14 rounded-full ml-96 max-md:ml-0 max-md:items-center"
          src="/photoProfil.png"
          alt="Photo de profil"
          width={56}
          height={56}
        />

        <div className="border-[1px] hover:opacity-50 rounded-3xl py-2 px-4 flex items-center gap-8">
          <a
            href="#projets"
            className="text-white hover:opacity-50 dark:text-black"
          >
            projets
          </a>
          <a href="#skills" className="text-white hover:opacity-50 dark:text-black">
            skills
          </a>
          <a href="#contact" className="text-white hover:opacity-50 dark:text-black">
            contact
          </a>
        </div>

        <div className="border-[1px] rounded-3xl py-2 px-4 flex items-center gap-8">
          <a href="CV_Maxime_E.pdf">
            <Image
              className="max-w-[25px] invert hover:opacity-50 dark:invert-0"
              src="/cv.png"
              alt="logo avec lien cv"
              width={25}
              height={25}
            />
          </a>
          <a href="mailto:maxime.esteves81@orange.fr?subject=Contact&body=Bonjour,">
            <Image
              className="max-w-[25px] invert hover:opacity-50 dark:invert-0"
              src="/mail.png"
              alt="logo avec lien mail"
              width={25}
              height={25}
            />
          </a>
          <a href="https://www.linkedin.com/in/maxime-esteves-7a12b3225">
            <Image
              className="max-w-[25px] invert hover:opacity-50 dark:invert-0"
              src="/linkedin.svg"
              alt="logo avec lien linkedin"
              width={25}
              height={25}
            />
          </a>
          <a href="https://www.twitch.tv/maximodelavego">
            <Image
              className="max-w-[25px] invert hover:opacity-50 dark:invert-0"
              src="/twitch.svg"
              alt="logo avec lien twitch"
              width={25}
              height={25}
            />
          </a>
          <a href="https://www.tiktok.com/@maximo_delavego?lang=fr">
            <Image
              className="max-w-[25px] invert hover:opacity-50 dark:invert-0"
              src="/tiktok.png"
              alt="logo avec lien tiktok"
              width={25}
              height={25}
            />
          </a>
        </div>

        <div className="flex items-center px-96 max-md:px-0">
          <Button />
        </div>
      </nav>

      <div className="ml-96 mb-8 flex flex-row items-center gap-8 max-md:ml-0 max-md:justify-center">
        <h1 className="text-5xl font-bold text-white dark:text-black max-md:w-[380px]">
          Développeur front-end
        </h1>
      </div>

      <div className="ml-96 w-[700px] max-md:ml-0 max-md:w-auto max-md:flex max-md:flex-rows max-md:justify-center">
        <p className="text-base text-white mb-24 dark:text-black max-md:w-[380px]">
          👋 Bonjour, je suis <strong className="text-red-500">Maxime Esteves</strong>, en
          reconversion professionnelle, je recherche une entreprise pour valider ma formation
          de Développeur Web en alternance.
          <br />
          🔄 Rythme d&apos;alternance : 3 semaines en entreprise / 1 semaine en formation.
          <br />
          <br /> Je suis autodidacte, curieux et envieux d&apos;apprentissage ! Découvre mon
          parcours et mes projets ☺️
        </p>
      </div>

      <div className="relative max-w-2xl ml-96 mb-48 max-md:ml-20  max-md:mb-24" id="projets">
        <div className="pointer-events-none">
          <div className="absolute right-1/2 translate-x-1/2 -top-10 h-px w-[100%] bg-gray-400 opacity-20"></div>
          <div className="absolute -top-10 right-1/2 h-[2px] w-48 rounded-full bg-gradient-to-r from-red-500"></div>
        </div>
      </div>
    </header>
  );
};
