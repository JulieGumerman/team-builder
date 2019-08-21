import React, { useState } from 'react';

import './App.css';

import TeamMember from "./components/TeamMember";


function App() {

  // const [teachers, setTeachers] = useState( [] );
  const [teachers, setTeachers] = useState([]);

  function addNewTeachers(teacher) {
    console.log("teacher from function", teacher)
    setTeachers([...teachers, teacher]);
    console.log("teachers", teachers);
  }



  return (
    <div className="App">
      <h1>Teacher Gift-Giving Connection</h1>
      <h2>Teachers, let's hear about you!</h2>
          <TeamMember addNewTeachers={addNewTeachers} />
      <h2>Parents and teachers, here's your staff! </h2>
      {teachers.map(  teacher   => {
          return (<div key={teacher.id}><h3>{teacher.name}</h3><p>{teacher.birthday}</p><p>{teacher.food}</p></div>
          )
      })}

    </div>
  );
}

export default App;
