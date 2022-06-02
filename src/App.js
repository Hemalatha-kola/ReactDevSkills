import './App.css';
import SkillList from "./SkillList"
import NewSkillForm from './NewSkillForm';
import "./SkillList.css"
import "./SkillListItem.css"
import "./NewSkillForm.css"
import { useState } from 'react';


function App() {
  // const skills = [
  //   { name: "HTML", level: 5 },
  //   { name: "CSS", level: 3 },
  //   { name: "JavaScript", level: 4 },
  //   { name: "Python", level: 2 },
  // ];
  const [skills, setSkills] = useState(
    [
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
    ]
  );
  function addSkill(skill) {
    setSkills([...skills, skill]);
  }
  return (
    <div className="App">
      <div className="teal-text">
      <h1>React Dev Skills</h1>
      <SkillList  skills={skills}/>
      <hr/>
      <NewSkillForm addSkill = {addSkill}/>
    </div>
    </div>
  );
}

export default App;
