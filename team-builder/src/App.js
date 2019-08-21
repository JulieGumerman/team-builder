import React, { useState } from 'react';

import './App.css';

import TeamMember from "./components/TeamMember";


function App() {

  const [teachers, setTeachers] = useState( [] );

  function addNewTeachers(teacher) {
    setTeachers(...teachers, teacher);
  }



  return (
    <div className="App">
      <h1>Teacher Gift-Giving Connection</h1>
      <h2>Teachers, let's hear about you!</h2>
   
      <h2>Parents and teachers, here's your staff! </h2>
      {teachers.map(  teacher   => {
           <TeamMember addNewTeachers={addNewTeachers} teacher={teacher}/>
      })}

    </div>
  );
}

export default App;
