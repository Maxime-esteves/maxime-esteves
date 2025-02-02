import { Experiences } from "./Experiences";
import { Projets } from "./Projets";
import { Formation } from "./Formation";
import { Contact } from "./Contact";
import { Section } from "./Section"

export const Main = () => {
    
    return (

        <><div>
            <Projets />
        </div>
        <div className="grid grid-cols-2 items-start mt-4 gap-4 w-auto">
            <Formation />
            <Experiences />
        </div>
        <div className=" flex justify-center">
          <Section />
      
        </div >
        <div className=" flex justify-center">

           <Contact /> 
        </div>
        
        </>
    );
  };
  
