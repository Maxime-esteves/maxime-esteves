"use client"
import { JSX, useState } from "react";
import Image from "next/image";

export const Projets = () => {
  return <ExpandableDiv />;
};
export default function ExpandableDiv(): JSX.Element {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const projectsInvisible = [
      {
        id: 1,
        title: "Site E-commerce",
        description:
          "Réalisation avec le CMS Webador.",
        link: "https://mignonneries-nathalie.fr",
        image: "angle-cercle-droite.svg",
        
      },
      {
        id: 2,
        title: "Mini-jeux (la grille, tours de Hanoï)",
        description:
          "Exercice pour développer ma pratique des algorithmes JS.",
        link: "https://maximeesteves.github.io/jeux.html",
        image: "angle-cercle-droite.svg",
      },
      {
        id: 3,
        title: "Application (calcul d'une barre de progression)",
        description:
          'Utilisantion de la méthode "prompt engineering" en Python.',
        link: "https://maximeesteves.github.io/application.html",
        image: "angle-cercle-droite.svg",
      },
      {
        id: 4,
        title: "Site portfolio",
        description:
          "Création d'un portfolio. Réalisation en HTML/CSS.",
        link: "https://marineesteves.go.yn.fr/",
        image: "angle-cercle-droite.svg",
      },
      {
        id: 5,
        title: "Mon site portfolio",
        description: "Création de mon Portfolio. HTML/CSS/JAVASCRIPT.",
        link: "https://maximeesteves.github.io/",
        image: "angle-cercle-droite.svg",
      },
      {
        id: 6,
        title: "Application de gestion d'élevage",
        description: "Gestion d'un élevage de Volkorne sur Dofus. PHP/MySQL/JS",
        link: "https://le-bon-eleveur.42web.io/",
        image: "angle-cercle-droite.svg",
      },
    ];
      const projects = [
       {
         id: 7,
         title: "Site web recherche d'entreprise",
         description: "En cours de création.",
         image: "editer.svg",
       },
    ];
  
    return (
      <div className="flex justify-center items-center gap-4">
        {/* ---------------- PROJETS ------------------ */}
        <div className={`rounded-lg px-8 py-8 w-auto border-[1px] flex flex-col max-md:ml-6 max-md:mr-6 ${
        isExpanded ? "h-auto" : "h-auto"
        }`}>
          {/* ✅ H1 en dehors de la grid mais toujours dans le cadre */}
          <h1 className="text-white text-1xl font-bold mb-6 dark:text-black">
            Mes créations
          </h1>
    
          {/* Conteneur des projets en GRID */}
          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            {projectsInvisible.map((projectsInvisible) => (
              <div 
              key={projectsInvisible.id} 
              className="flex items-center gap-6 mb-4">
                {/* Lien avec l'image */}
                <div>
                  <a href={projectsInvisible.link} target="_blank" rel="noopener noreferrer">
                    <Image 
                      src={projectsInvisible.image}
                      alt={`Icône de ${projectsInvisible.title}`}
                      width={50} 
                      height={50} 
                      className="max-w-[35px] invert hover:invert-0 hover:bg-white hover:p-1 rounded-lg dark:invert-0 dark:hover:bg-white dark:hover:invert"
                    />
                  </a>
                </div>
    
                {/* Texte descriptif */}
                <div>
                  <h3 className="text-white text-base font-medium tracking-tight dark:text-black">
                    {projectsInvisible.title}
                  </h3>
                  <p className="text-gray-500 text-sm dark:text-black">{projectsInvisible.description}</p>
                </div>
              </div>
            ))}
          </div>
        
        {isExpanded && (
                  <div>
                  {projects.map((projects) => (
                    <div key={projects.id} className="flex items-center gap-6 mb-6">
                    {/* Lien avec l'image */}
                    <div>
                        <Image 
                          src={projects.image}
                          alt={`Icône de ${projects.title}`}
                          width={50} 
                          height={50} 
                          className="max-w-[35px] mt-10 invert hover:invert-0 hover:bg-white hover:p-1 rounded-lg dark:invert-0 dark:hover:bg-white dark:hover:invert"
                        />
                    </div>
        
                    {/* Texte descriptif */}
                    <div>
                      <h3 className="text-white text-base font-medium tracking-tight dark:text-black mt-10">
                        {projects.title}
                      </h3>
                      <p className="text-gray-500 text-sm dark:text-black">{projects.description}</p>
                    </div>
                  </div>
                  ))}
                  </div>
                )}
        <button
    onClick={() => setIsExpanded(!isExpanded)}
    className=" text-red-500 rounded-lg hover:text-white flex justify-start"
    >
    {isExpanded ? "Réduire" : "Afficher"}
  </button>
  </div>
  </div>
    );
    
  };
