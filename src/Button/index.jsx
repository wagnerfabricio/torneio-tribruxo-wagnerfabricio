import "./styles.css";

const Button = ({ handleClick, nextPage, children }) => {
  return (
    <button
      className="button"
      onClick={() => {
        handleClick();
        nextPage && nextPage();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
