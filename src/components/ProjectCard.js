import clicking from "../assets/icons/clicking.png";

const ProjectCard = ({ title, image, redirection, typeProject }) => {
  return (
    <a
      href={redirection}
      target="_blank"
      rel="noreferrer"
      className={"projectContainer"}
    >
      <div>
        <p className="title">{title.toUpperCase()}</p>
        <p className="typeProject">
          {typeProject.toLowerCase().charAt(0).toUpperCase() +
            typeProject.toLowerCase().slice(1)}
        </p>
        <img className="touchableIcon" src={clicking} alt="Icon cliquer" />
      </div>
      <img
        className="backgroundImage"
        src={image}
        alt="Project Image"
        width={1650}
        height={825}
      />
    </a>
  );
};

export default ProjectCard;
