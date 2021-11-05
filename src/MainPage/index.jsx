import Button from "../Button/Button";

const MainPage = ({ nextPage, handleClick }) => {
  return (
    <section className="home">
      <h1>Torneio tribruxo</h1>
      <p>Clique no botão para encontrar os feiticeiros!</p>
      <Button nextPage={nextPage} handleClick={handleClick}>
        Começar!
      </Button>
    </section>
  );
};

export default MainPage;
