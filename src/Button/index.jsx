import { useState } from "react";
import theme from "../audio/theme.mp3";

import "./styles.css";

const Button = ({ handleClick, nextPage, playSong, children }) => {
  const song = new Audio(theme);

  const playAudio = () => {
    if (playSong === true) {
      song.play();
    }
  };

  return (
    <button
      className="button"
      onClick={() => {
        handleClick();
        nextPage && nextPage();
        playAudio();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
