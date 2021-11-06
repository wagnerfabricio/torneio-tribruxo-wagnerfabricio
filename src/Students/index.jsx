const FetchStudents = (setUseState) => {
  fetch("https://hp-api.herokuapp.com/api/characters/students")
    .then((results) => results.json())
    .then((results) =>
      setUseState(
        results.filter(
          (students) => students.image.includes("http") && students.house !== ""
        )
      )
    );
};

export default FetchStudents;
