import React from "react";

function NewSkillForm(){
    return(
        <form className="NewSkillForm">
            <label>Skill</label>
            <input></input>
            <label>Level</label>
            <select>
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>
            <button>ADD SKILL</button>
        </form>
    );
}

export default NewSkillForm;