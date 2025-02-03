"use client"
import { JSX, useState } from "react";
import Image from "next/image";

export const Experiences = () => {
  return <ExpandableDiv />;
};

export default function ExpandableDiv(): JSX.Element {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const experiencesVisible = [
    {
      id: 1,
      title: "Employé logistique",
      description:
        "Réception et préparation de commandes de matériels médicaux.",
      link: "https://mignonneries-nathalie.fr",
      image: "/IconeASEPT.png",
      date: "2023 - 2024"
    },
    {
      id: 2,
      title: "Coordinateur logistique",
      description:
        "Gestion de la chaîne  et du dépôt logistique. Supervision d'une équipe de 3 personnes.",
      link: "https://maximeesteves.github.io/jeux.html",
      image: "/IconeMalrieu.png",
      date: "2019 -2022"
    },
    {
      id: 3,
      title: "Vendeur/BE électricité",
      description:
        'Vente et conseil en électricité aux particuliers et professionnels.',
      link: "https://maximeesteves.github.io/application.html",
      image: "/IconeMalrieu.png",
      date: "2017 - 2018"
    },
  ]
    const experiences = [
    
    {
      id: 4,
      title: "Électricien",
      description:
        "Électricité générale sur habitations neuves et/ou rénovées.",
      link: "https://marineesteves.go.yn.fr/",
      image: "/IconeSME.png",
      date: "2013 - 2017"
    },
  ];
  return (
    <div className="flex flex-col items-start max-md:flex-row max-md:w-auto max-md:justify-center">
      {/* Div avec transition */}
      <div
        className={`w-auto border-[1px] p-4 rounded-lg overflow-hidden transition-all duration-500 ${
          isExpanded ? "h-auto" : "h-auto"
        }`}
      >
        <h1 className="text-white text-1xl font-bold mb-6 dark:text-black">Mes expériences</h1>
       {experiencesVisible.map((experiencesVisible) => (
            <div
              key={experiencesVisible.id}
              className="flex items-center gap-8 mb-4"
            >
              {/* Lien avec l'image */}
              <div>
               
                  <Image 
                    src={experiencesVisible.image}
                    alt={`Icône de ${experiencesVisible.title}`}
                    width={50} 
                      height={50}
                    className="max-w-[35px] hover:bg-white hover:rounded-xl rounded-lg ml-2  " 
                  />
              </div>
  
              {/* Texte descriptif */}
              <div>
                <h3 className="text-white text-base font-medium tracking-tight">
                  {experiencesVisible.title}
                </h3>
                <p className="text-gray-500 text-sm w-[280px] max-md:w-[200px]">{experiencesVisible.description}</p>
              </div>
              <div>
                <p className="text-gray-300 text-xs dark:text-black">{experiencesVisible.date}</p>

              </div>
            </div>
          ))}
        {isExpanded && (
          <div>
          {experiences.map((experiences) => (
            <div
              key={experiences.id}
              className="flex items-center gap-8 mb-10 "
            >
              {/* Lien avec l'image */}
              <div>
                <a
                  href={experiences.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image 
                    src={experiences.image}
                    alt={`Icône de ${experiences.title}`}
                    width={50} 
                      height={50}
                    className="max-w-[35px] hover:bg-white hover:rounded-xl rounded-lg ml-2"
                  />
                </a>
              </div>
  
              {/* Texte descriptif */}
              <div>
                <h3 className="text-white text-base font-medium tracking-tight dark:text-black">
                  {experiences.title}
                </h3>
                <p className="text-gray-500 text-sm w-[280px] max-md:w-[200px]">{experiences.description}</p>
              </div>
              <div>
                <p className="text-gray-300 text-xs dark:text-black">{experiences.date}</p>

              </div>
            </div>
          ))}
          </div>
        )}

  <button
    onClick={() => setIsExpanded(!isExpanded)}
    className=" text-red-500 rounded-lg hover:text-white  "
    >
    {isExpanded ? "Réduire" : "Afficher"}
  </button>
</div>

    </div>
  );
}
