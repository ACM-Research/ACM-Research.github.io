import "../styles/entry.css";
import "../styles/main.css";

const Entry = (props) => {
  return (
    <div className="projEntry">
      <div className="leftGroup">
        <div className="leadGroup">
          <div className="imgContainer">
            <img
              className="researchLeadImage"
              src={props.src}
              alt="Research Lead"
            />
          </div>
          <div className="researchLeadCaption">
            <h3>
              Research Lead: <br /> <span className="bold">{props.lead}</span>
            </h3>
          </div>
        </div>
        <p className="participantsList">
          {" "}
          <u>Participants:</u> <br />
          {props.participants.map((p) => (
            <>
              <span>{p}</span>
              <br />
            </>
          ))}
        </p>
      </div>
      <div className="summaryContainer">
        <h1 className="projHeader">{props.name}</h1>
        <p className="summary">
          {props.summary}{" "}
        </p>
      </div>
    </div>
  );
};

export default Entry;
