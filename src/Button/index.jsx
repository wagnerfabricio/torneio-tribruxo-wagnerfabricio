import "./styles.css";

const Button = ({ handleClick, nextPage, song, children }) => {
  return (
    <button
      className="button"
      onClick={() => {
        handleClick();
        nextPage && nextPage();
        song && song.play();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
