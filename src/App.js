import logo from './logo.svg';
import './App.css';
import SkillList from "./SkillList"
import NewSkillForm from './NewSkillForm';
import "./SkillList.css"
import "./SkillListItem.css"
import "./NewSkillForm.css"


function App() {
  const skills = [
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ];
  return (
    <div className="App">
       <div className="teal-text">
      <h1>React Dev Skills</h1>
      <SkillList  skills={skills}/>
      <hr/>
      <NewSkillForm/>
    </div>
    </div>
  );
}

export default App;
