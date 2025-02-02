import Image from "next/image";
export const Projets = () => {
    const projects = [
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
         title: "Site web recherche d'entreprise",
         description: "En cours de création.",
         link: "",
         image: "editer.svg",
       },
      // {
      //   id: 7,
      //   title: "Site web d'un jeu vidéo",
      //   description: "En cours de création.",
      //   link: "",
      //   image: "editer.svg",
      // },
    ];
  
    return (
      <div className="flex justify-center items-center gap-4">
        {/* ---------------- PROJETS ------------------ */}
        <div className=" rounded-lg px-11 py-8 w-auto border-[1px] flex flex-col">
          {/* ✅ H1 en dehors de la grid mais toujours dans le cadre */}
          <h1 className="text-white text-1xl font-bold mb-6 dark:text-black">
            Mes créations
          </h1>
    
          {/* Conteneur des projets en GRID */}
          <div className="grid grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="flex items-center gap-6 mt-2">
                {/* Lien avec l'image */}
                <div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Image 
                      src={project.image}
                      alt={`Icône de ${project.title}`}
                      className="max-w-[35px] invert hover:invert-0 hover:bg-white hover:p-1 rounded-lg dark:invert-0 dark:hover:bg-white dark:hover:invert"
                    />
                  </a>
                </div>
    
                {/* Texte descriptif */}
                <div>
                  <h3 className="text-white text-base font-medium tracking-tight dark:text-black">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm dark:text-black">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
    
  };