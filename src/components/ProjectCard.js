const ProjectCard = ({ title, image, redirection, typeProject }) => {
  return(
    <a href={redirection} target="_blank" rel="noreferrer" style={{backgroundImage: `url(${image})`}} className={"projectContainer"}>
      <div>
        <p className="title">{title.toUpperCase()}</p>
        <p className="typeProject">{typeProject.toLowerCase().charAt(0).toUpperCase() + typeProject.toLowerCase().slice(1)}</p>
      </div>
    </a>
  )
}

export default ProjectCard;