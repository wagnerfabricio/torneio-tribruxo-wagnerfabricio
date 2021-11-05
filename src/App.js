import { useState, useEffect } from "react";
import MainPage from "./MainPage";
import TournamentPage from "./TournamentPage";

import "./App.css";

function App() {
  const [page, setPage] = useState(true);
  const [students, setStudents] = useState([]);
  const [selected, setSelected] = useState({});
  const [selecteds, setSelecteds] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((results) => results.json())
      .then((results) =>
        setStudents(
          results.filter(
            (students) =>
              students.image.includes("http") && students.house !== ""
          )
        )
      );
  }, []);

  const selectRandomStudant = () => {
    let randomStudent = students[Math.floor(Math.random() * students.length)];
    if (
      selecteds.filter((wizard) => wizard.house === randomStudent.house)
        .length === 0
    ) {
      setSelected(randomStudent);
    } else {
      selectRandomStudant();
    }
  };

  useEffect(() => {
    if (Object.entries(selected).length !== 0 && selecteds.length <= 2) {
      setSelecteds([...selecteds, selected]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  useEffect(() => {
    if (
      Object.entries(selecteds).length !== 0 &&
      Object.entries(selecteds).length <= 2
    ) {
      selectRandomStudant();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selecteds]);

  const nextPage = () => {
    setPage(false);
  };

  return (
    <div className="App">
      <main className="container">
        {page ? (
          <MainPage nextPage={nextPage} handleClick={selectRandomStudant} />
        ) : (
          <TournamentPage
            selecteds={selecteds}
            setSelecteds={setSelecteds}
            handleClick={selectRandomStudant}
          />
        )}
      </main>
    </div>
  );
}

export default App;
