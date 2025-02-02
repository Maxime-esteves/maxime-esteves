import Image from "next/image";
export const Contact = () => {

  return(
      <><div className=" flex mt-48 mb-8 gap-10  " id="contact">
<div className="">


      <h1 className="text-5xl font-bold text-white mb-8 ml-16 dark:text-black"> Contact</h1>

        <p className="text-base text-white mb-24 w-[650px] ml-16 dark:text-black"> 💪 Ma <strong className="text-red-500">curiosité </strong>  
          et mon <strong className="text-red-500">engagement</strong>  dans chacune des missions que j’ai menées
          dans ma carrière m’ont <strong className="text-red-500">motivé</strong>  aujourd’hui à me lancer dans cette reconversion professionnelle. 
          Je souhaite, en intégrant une alternance, évoluer dans ce métier en me confrontant directement au monde du travail, en parallèle du programme scolaire.
          <br /> <br /> Je suis disponible dans la zone de 📍 Montauban (82) 📍 Toulouse (31), mais également prêt à travailler en 🖥️ 100 % distanciel ! ☺️</p>

      <div className="relative lg:max-w-2xl ml-16">
        <div className="pointer-events-none">
          <div className="absolute right-1/2 translate-x-1/2 -top-10 h-px w-[100%] bg-gray-400 opacity-20"></div>
          <div className="absolute -top-10 right-1/2 h-[2px] w-48 rounded-full bg-gradient-to-r from-red-500"></div>
        </div>
      </div>
      <div className=" rounded-3xl flex items-center justify-start gap-8 ml-16">
  
                <a href="CV_Maxime_E.pdf"><Image  className=" max-w-[25px] invert hover:opacity-50 dark:invert-0" src="cv.png" alt="logo avec lien cv" /></a>
                <a href="mailto:maxime.esteves81@orange.fr?subject=Contact&body=Bonjour,"><Image  className=" max-w-[25px] invert hover:opacity-50 dark:invert-0" src="mail.png" alt="logo avec lien mail" /></a>
                <a href="https://www.linkedin.com/in/maxime-esteves-7a12b3225"><Image  className=" max-w-[25px] invert hover:opacity-50 dark:invert-0" src="linkedin.svg" alt="logo avec lien linkedin" /></a>
                <a href="https://www.twitch.tv/maximodelavego"><Image  className=" max-w-[25px] invert hover:opacity-50 dark:invert-0" src="twitch.svg" alt="logo avec lien twitch" /></a>
                <a href="https://www.tiktok.com/@maximo_delavego?lang=fr"><Image  className=" max-w-[25px] invert hover:opacity-50 dark:invert-0" src="tiktok.png" alt="logo avec lien tiktok" /></a>

        </div>  
      </div>
      <a href=""><Image className="w-64 h-64 mr-24 rounded-full" src="photoProfil.png" alt="" /></a>
      </div></>
  
  )
}