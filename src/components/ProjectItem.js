import React from "react";

function ProjectItem({ name, about, technologies }) {
  function TechItem(props) {
    return <span>{props.technologies}</span>;
  }
  const techie = technologies.map((tech) =>{
    return <TechItem key={tech} technologies={tech}/>;
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techie}
      </div>
    </div>
  );
}

export default ProjectItem;
