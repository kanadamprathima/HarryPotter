import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CharacterDetailsPage = () => {
  const [char, setChar] = useState({});
  const params = useParams();
  console.log(params);
  const fetchCharacter = async () => {
    const Response = await axios.get(
      `https://hp-assessment-api.herokuapp.com/hp/character/:${params.id}`
    );
    console.log(Response);
    setChar(Response.data);
  };
  useEffect(() => {
    fetchCharacter();
  }, []);

  return (
    <div>
      {/* <h1>CHARACTER PAGE HERE</h1> */}
      {char ? (
        <div>
          <h1>{char.name}</h1>
          <img src={char.imgUrl} alt="pic" />
          <h4>
            born in:{char.born}, {char.species},{char.blood}
          </h4>
          <p>
            <b>Hogwarts house:</b>
            {char.house.name}
          </p>
          <p>
            <b>Quote:</b>
            {char.quote}
          </p>
        </div>
      ) : (
        <p> Loading..</p>
      )}
    </div>
  );
};
export default CharacterDetailsPage;
