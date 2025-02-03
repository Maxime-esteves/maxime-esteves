import { Experiences } from "./Experiences";
import { Projets } from "./Projets";
import { Formation } from "./Formation";
import { Contact } from "./Contact";
import { Skills } from "./Skills"
import { Footer } from "./Footer";

export const Main = () => {
    
    return (

        <><div >
            <Projets />
        </div>
        <div className="grid grid-cols-2 items-start mt-4 gap-4 w-auto max-md:grid-cols-1">
            <Formation />
            <Experiences />
        </div>
        <div className=" flex justify-center ">
          <Skills />
      
        </div >
        <div className=" flex justify-center ">

           <Contact /> 
        </div>
           <Footer />
        
        </>
    );
  };
  
