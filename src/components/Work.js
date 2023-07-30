import "./WorcardStyle.css";
import Workcard from"./Workcard"
import Workdata from"./Workdata"
import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">UI/UX Projects</h1>
        <div className="project-container">
           {Workdata.map((val, ind)=>
           {
            return(
                <Workcard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                    view={val.view}/>
            );
           })} 
        </div>
    </div>
  );
}


export default Work;