import Button from "../Button/";
import theme from "../audio/theme.mp3";

import "./styles.css";

const MainPage = ({ nextPage, handleClick }) => {
  const song = new Audio(theme);

  return (
    <section className="main">
      <h1>Torneio tribruxo</h1>
      <p>Clique no botão para encontrar os feiticeiros!</p>
      <Button nextPage={nextPage} handleClick={handleClick} song={song}>
        Começar!
      </Button>
    </section>
  );
};

export default MainPage;
