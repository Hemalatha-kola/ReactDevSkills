import React from "react";
import SkillListItem from "./SkillListItem"
function SkillList({skills}){
    return(
        <ul className="padding-0">
            {skills.map((s, idx) => (
                <SkillListItem skill={s} key={idx} index={idx} />
            ))}
        </ul>
    );
}

export default SkillList;