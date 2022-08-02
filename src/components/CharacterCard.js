import { NavLink } from "react-router-dom";
import "./style.css";
const Charactercard = (props) => {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={props.img} alt="pic" />
      <br />
      <h4>Born in: {props.born}</h4>
      <h5> House in Hogward: {props.house}</h5>
      <h5>HouseId: {props.houseId}</h5>
      <p>Blood: {props.blood}</p>
      {/* <p>Species: {props.species}</p> */}
      {/* <p> Quote: {props.quote}</p> */}
      <NavLink to={`/character/:${props.id}`}>
        <button>Read more</button>
      </NavLink>
    </div>
  );
};
export default Charactercard;
