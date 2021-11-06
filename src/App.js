import { useState, useEffect } from "react";
import FetchStudents from "./Students";
import MainPage from "./MainPage";
import TournamentPage from "./TournamentPage";

import "./App.css";

function App() {
  const [page, setPage] = useState(true);
  const [students, setStudents] = useState([]);
  const [selecteds, setSelecteds] = useState([]);

  useEffect(() => {
    FetchStudents(setStudents);
  }, []);

  const selectRandomStudants = () => {
    setSelecteds([]);
    const randomStudents = [];
    for (let i = 0; i <= 2; i++) {
      const randomStudent =
        students[Math.floor(Math.random() * students.length)];

      if (
        randomStudents.filter((wizard) => wizard.house === randomStudent.house)
          .length === 0
      ) {
        randomStudents.push(randomStudent);
      } else {
        i--;
      }
    }
    setSelecteds(randomStudents);
  };

  const nextPage = () => {
    setPage(false);
  };

  return (
    <div className="App">
      <main className="container">
        {page ? (
          <MainPage nextPage={nextPage} handleClick={selectRandomStudants} />
        ) : (
          <TournamentPage
            selecteds={selecteds}
            setSelecteds={setSelecteds}
            handleClick={selectRandomStudants}
          />
        )}
      </main>
    </div>
  );
}

export default App;
