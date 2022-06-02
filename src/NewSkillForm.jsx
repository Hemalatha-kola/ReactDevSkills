import React from "react";
import { useState } from "react";

function NewSkillForm({addSkill}){
    const [newSkill, setNewSkill] = useState({
        name: "",
        level: 3
    }
       
    );

    function handleSubmit(evt){
        evt.preventDefault();
        addSkill(newSkill);
        setNewSkill({name: "", level: 3 });
    }
    function handleChange(evt) {
        setNewSkill({ ...newSkill, [evt.target.name]: evt.target.value });
      }
    return(
        <>
        <form className="NewSkillForm" onSubmit={handleSubmit}>
            <label>Skill</label>
            <input 
            className="NewSkillForm"
            name="name"
            value={newSkill.name}
            onChange={handleChange}
            required
            pattern=".{1,}" 
            placeholder="NewSkill"/>
            
            <label>Level</label>
            <select 
            className="NewSkillForm"
            name="level"
            value={newSkill.level}
            onChange={handleChange}>
                <option value={5}>5</option>
                <option value={4}>4</option>
                <option value={3}>3</option>
                <option value={2}>2</option>
                <option value={1}>1</option>
            </select>
            <button>ADD SKILL</button>
        </form>
        </>
    );
}

export default NewSkillForm;
