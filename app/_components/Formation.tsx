import { JSX } from "react";
import Image from "next/image";


export const Formation = () => {
  return <ExpandableDiv />;
};

export default function ExpandableDiv(): JSX.Element {
  const formationVisible = [
    {
      id: 1,
      title: "Titre Pro Développement Web",
      description:
        "3 semaines en entreprise / 1 semaine en formation. (100% distanciel)",
      link: "",
      image: "diplome.svg",
      date: "2025 - 2026"
    },
    {
      id: 2,
      title: "BTS FED option C",
      description:
        "Fluides, Énergies, Domotique option Bâtiment communicants (31)",
      link: "",
      image: "diplome.svg",
      date: "2017 - 2015"
    },
      {
        id: 3,
        title: "BAC Pro Électrotechnique",
        description:
          'Mention assez bien. (81)',
        link: "",
        image: "diplome.svg",
        date: "2013 - 2015"
      },
  ];
  return (
    <div className="flex flex-col items-end max-md:flex-row max-md:w-auto max-md:justify-center">
      {/* Div avec transition */}
      <div
        className={`w-auto border-[1px] p-4 rounded-lg h-[346px] max-md:h-[380px] `}
      >
        <h1 className="text-white text-1xl font-bold mb-6 dark:text-black ">Mes formations</h1>
       {formationVisible.map((formationVisible) => (
            <div
              key={formationVisible.id}
              className="flex items-center gap-8 mb-6"
            >
              {/* Lien avec l'image */}
              <div>
                
                  <Image 
                    src={formationVisible.image}
                    alt={`Icône de ${formationVisible.title}`}
                    width={50} 
                      height={50}
                    className="max-w-[35px] invert ml-2 rounded-lg hover:p-1 dark:invert-0 dark:hover:bg-white dark:hover:invert"
                  />
              
              </div>
  
              {/* Texte descriptif */}
              <div>
                <h3 className="text-white text-base font-medium tracking-tight dark:text-black">
                  {formationVisible.title}
                </h3>
                <p className="text-gray-500 text-sm w-[280px] max-md:w-[200px]">{formationVisible.description}</p>
              </div>
              <div>
                <p className="text-gray-300 text-xs dark:text-black">{formationVisible.date}</p>

              </div>
            </div>
          ))}
        
      </div>

    </div>
  );
}
