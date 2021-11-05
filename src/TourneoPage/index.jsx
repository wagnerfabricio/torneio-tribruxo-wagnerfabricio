
const TournamentPage = ({ selecteds, handleClick }) => {
  return (
    <div>
      {selecteds.map((wizard, index) => (
        <div key={index}>
          <img src={wizard.image} alt={wizard.name} />
          <p>{wizard.name}</p>
          <p>{wizard.house}</p>
        </div>
      ))}
      <button onClick={handleClick}>Tentar Novamente</button>
    </div>
  );
};

export default TournamentPage;
