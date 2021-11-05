import Button from "../Button/";
import "./styles.css";

const MainPage = ({ nextPage, handleClick }) => {
  return (
    <section className="main">
      <h1>Torneio tribruxo</h1>
      <p>Clique no botão para encontrar os feiticeiros!</p>
      <Button nextPage={nextPage} handleClick={handleClick} playSong={true}>
        Começar!
      </Button>
    </section>
  );
};

export default MainPage;
