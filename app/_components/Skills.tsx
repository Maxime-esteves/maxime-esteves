import Image from "next/image";

export const Skills = () => {
  const competences = [
    { id: 1, title: "Responsabilité, pédagogie", image: "/diplome.svg" },
    { id: 2, title: "Polyvalence, rigueur et organisation", image: "/diplome.svg" },
    { id: 3, title: "Bonne communication et relation clientèle", image: "/diplome.svg" },
    { id: 4, title: "Esprit d’équipe, autonomie", image: "/diplome.svg" },
    { id: 5, title: "Capacité à résoudre les problèmes rapidement", image: "/diplome.svg" },
  ];

  return (
    <>
    <div className="mr-36  max-md:mr-0">

    
    <div className="">
      <div className="mt-36 mb-8 gap-8 ">
        <h1 className="text-5xl font-bold text-white dark:text-black">Skills</h1>
      </div>

      <div id="skills">
        <p className="text-base text-white mb-24 w-[700px] dark:text-black max-md:w-[370px]">
          💪 Fort d'une <strong className="text-red-500">expérience de six ans</strong> dans la logistique d’un commerce de gros avec une expérience en vente/bureau d&apos;étude en électricité, j&apos;ai pu acquérir 
          des compétences uniques qui sauront vous montrer ma persévérance dans mon travail.
          <br />
          <br /> Je suis autodidacte, curieux et envieux d&apos;apprentissage ! Découvre mes skills ☺️
        </p>
      </div>
      </div>
      {/* Barre de séparation */}
      <div className="relative max-w-2xl mb-48 max-md:ml-4 ">
        <div className="pointer-events-none">
          <div className="absolute right-1/2 translate-x-1/2 -top-10 h-px w-full bg-gray-400 opacity-20"></div>
          <div className="absolute -top-10 right-1/2 h-[2px] w-48 rounded-full bg-gradient-to-r from-red-500"></div>
        </div>
      </div>

<div className="flex items-start max-md:w-[370px] max-md:flex-col-reverse">
      <div className="grid grid-cols gap-6">
        <div>
          <div className="w-auto border p-8 rounded-lg h-auto">
            <h1 className="text-white text-xl font-bold mb-8 dark:text-black">Mes compétences</h1>
            {competences.map((item) => (
              <div key={item.id} className="flex items-center gap-8 mb-10">
                <div>
                  <Image 
                    src={item.image}
                    alt={`Icône de ${item.title}`}
                    width={35}
                    height={35}
                    className="max-w-[35px] invert ml-2 rounded-lg hover:p-1 dark:invert-0 dark:hover:bg-white dark:hover:invert"
                  />
                </div>
                <div>
                  <h3 className="text-white text-base font-medium tracking-tight dark:text-black">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
        {/* Logos des technologies */}
        <div className="flex flex-wrap w-[360px] gap-4 ml-4 items-center max-md:mb-4">
          {[
            { href: "https://developer.mozilla.org/fr/docs/Web/HTML", src: "/html-5.svg", alt: "HTML" },
            { href: "https://developer.mozilla.org/fr/docs/Web/CSS", src: "/css-3.svg", alt: "CSS" },
            { href: "https://developer.mozilla.org/fr/docs/Web/JavaScript", src: "/javascript.svg", alt: "JavaScript" },
            { href: "https://chatgpt.com/", src: "/chatGPT.svg", alt: "ChatGPT", className: "animate-rotate-360 invert dark:invert-0" },
            { href: "https://tailwindcss.com/", src: "/tailwindcss-icon.svg", alt: "Tailwind CSS" },
            { href: "https://www.webador.fr/", src: "/webador.svg", alt: "Webador", className: "animate-rotate-360 rounded-full" },
            { href: "https://fr.react.dev/", src: "/react.svg", alt: "React", className: "animate-rotate-360" },
            { href: "https://www.php.net/", src: "/PHP.svg", alt: "PHP", className: "invert dark:invert-0" },
            { href: "https://nextjs.org/", src: "/nextjs-icon.svg", alt: "Next.js", className: "animate-rotate-360" },
            { href: "https://www.typescriptlang.org/", src: "/typescript-icon.svg", alt: "TypeScript" },
          ].map((tech, index) => (
            <a key={index} href={tech.href} target="_blank" rel="noopener noreferrer">
              <Image src={tech.src} width={40} height={40} className={`${tech.className} hover:opacity-50`}  alt={tech.alt} />
            </a>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};
