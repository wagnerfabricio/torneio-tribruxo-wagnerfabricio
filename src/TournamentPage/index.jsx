import Button from "../Button";

import "./styles.css";

const TournamentPage = ({ selecteds, handleClick }) => {
  return (
    <section className="tournament-page">
      <div className="wizard-list">
        {selecteds.map((wizard, index) => (
          <div className="wizard-card" key={index}>
            <figure className={`color${index + 1}`}>
              <img src={wizard.image} alt={wizard.name} />
            </figure>
            <p>{wizard.name}</p>
            <p>{wizard.house}</p>
          </div>
        ))}
      </div>
      <Button handleClick={handleClick}>Tentar Novamente</Button>
    </section>
  );
};

export default TournamentPage;
