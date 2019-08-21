import React, { useState } from "react";

function TeamMember(props) {
    const [teamMember, addTeamMember] = useState( [{name: "", birthday: "", favFood: "", allergies: "", more: "", none: ""}] );

    const handleInfo = e => {
      addTeamMember({...teamMember, [e.target.name]: e.target.value })
    }
  
    // const submitForm = event => {
    //   event.preventDefault();
    //   const newTeacher = {...teamMember, id: Date.now()}
    //   props.addNewTeachers(newTeacher);
    //   console.log(teamMember);
    // }
    
    return (
        <div className="form-div">
        <form onSubmit={props.addNewTeachers}>
          <label>Member Name:</label>
          <input 
            type="text"
            name="name"
            placeholder="name goes here"
            value={teamMember.name}
            onChange={handleInfo}
          />
          <label>Birthday: </label>
          <input 
            type="date"
            name="birthday"
            value={teamMember.birthday}
            onChange={handleInfo}
          />
          <label>Favorite Food: </label>
          <input 
            type="text"
            placeholder="Cheesecake?"
            name="favFood"
            value={teamMember.favFood}
            onChange={handleInfo}
          />
          <label>Food allergies?</label>
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
            />
          <button type="submit">Submit!</button>
        </form>
        {console.log(teamMember)}
      </div>

        
    )

}

export default TeamMember;