import React, { useState } from "react";

function TeamMember(props) {
 
    // const [name, setName] = useState("");
    // const [birthday, setBirthday] = useState("");
    // const [food, setFood] = useState("");

    const [teacher, setTeacher] = useState({ name: "", birthday: "", food: ""})
  
    const submitForm = event => {
      event.preventDefault();
      const newTeacher = {...teacher, id: Date.now()}
      props.addNewTeachers(newTeacher);
      setTeacher({ name: "", birthday: "", food: ""})
    }
    
    return (
        <div className="form-div">
        <form onSubmit={submitForm}>
          <label>Member Name:</label>
          <input 
            type="text"
            name="name"
            placeholder="name goes here"
            value={teacher.name}
            onChange={e => setTeacher({name: e.target.value})}
          />
          <label>Birthday: </label>
          <input 
            type="date"
            name="birthday"
            value={teacher.birthday}
            onChange={e => setTeacher({birthday: e.target.value})}
          />
          <label>Favorite Food: </label>
          <input 
            type="text"
            placeholder="Cheesecake?"
            name="favFood"
            value={teacher.food}
            onChange={e => setTeacher({food: e.target.value})}
          />
          {/* <label>Food allergies?</label>
          <input 
            type="text"
            placeholder="n/a if none"
            name="allergies"
            value={teamMember.allergies}
            onChange={handleInfo}
          />
          <label>What you could use more of:</label>
          <input 
            type="text"
            placeholder="flare pens? post its?"
            name="more"
            value={teamMember.more}
            onChange={handleInfo}
          />
          <label>What you don't want more of:</label>
          <input 
            type="text"
            placeholder="grading papers?"
            name="less"
            value={teamMember.less}
            onChange={handleInfo}
            /> */}
          <button type="submit">Submit!</button>
        </form>
      </div>

        
    )

}

export default TeamMember;