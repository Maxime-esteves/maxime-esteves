import { Header } from "./_components/Header";
import { Main } from "./_components/Main";



function Home() {
  console.log("Page.tsx est chargé !"); // Ajout de ce log
  return (
    <><Header />
    <Main /></>
  );
}

export default Home;  // Ici, tu fais un export par défaut
