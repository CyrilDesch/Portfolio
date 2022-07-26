import IconCommunication from '../assets/icons/IconCommunication';
import IconDecouverte from '../assets/icons/IconDecouverte';
import IconPassion from '../assets/icons/IconPassion';
import IconSucces from '../assets/icons/IconSucces';

const ValeurCard = ({ title, paragraphe, presetIcon }) => {

  return(
    <div className="valeurCard" >
      {presetIcon === "succes" ? <IconSucces className="icon" /> : null}
      {presetIcon === "passion" ? <IconPassion className="icon" /> : null}
      {presetIcon === "decouverte" ? <IconDecouverte className="icon" /> : null}
      {presetIcon === "communication" ? <IconCommunication className="icon" /> : null} 
      <h1>{title}</h1>
      <p>{paragraphe}</p>
    </div>
  );
}

export default ValeurCard;