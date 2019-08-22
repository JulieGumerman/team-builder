import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
`
const TeacherCard = styled.div`
    width: 400px;
    border: 1px solid black;
    border-radius: 15px;
    background: #f8fad9;
`

const TeamMemberInfo = props => {

    
    return (
        
        <CardWrapper>
            {props.teachers.map(  teacher   => {
          return (
          <TeacherCard key={teacher.id}>
              <h3>{teacher.name}</h3>
              <p>birthday: {teacher.birthday}</p>
              <p>favorite food: {teacher.food}</p>
              <p>food allergies: {teacher.allergies}</p>
              <p>I could always use more: {teacher.more}</p>
              <p>I don't need any more...{teacher.less}</p>
          </TeacherCard>
          )
      })}

        </CardWrapper>
        
    )
}

export default TeamMemberInfo;