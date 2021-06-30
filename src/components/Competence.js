const Competence = ({ className, icon, title, desc }) => {
  return(
    <div className={className + " competenceContainer"}>
      <img className="icon" src={icon} alt="icon" />
      <h3>{title}</h3>
      <ul>
        {desc.map(item => <li>{item}</li>)}
      </ul>
    </div>
  );
}

export default Competence;