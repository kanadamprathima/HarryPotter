import axios from "axios";
import { useEffect, useState } from "react";
import Charactercard from "../components/CharacterCard";

const HomePage = () => {
  const [character, setCharacter] = useState(null);
  const getCharacters = async () => {
    const charResponse = await axios.get(
      "https://hp-assessment-api.herokuapp.com/hp/characters"
    );
    console.log(charResponse);
    setCharacter(charResponse.data);
  };
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <div>
      {character ? (
        character
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((char) => (
            <Charactercard
              key={char.id}
              id={char.id}
              name={char.name}
              born={char.born}
              img={char.imgUrl}
              houseId={char.houseId}
              house={char.house.name}
              // species={char.species}
              // quote={char.quote}
              blood={char.blood}
            />
          ))
      ) : (
        <p>"Loading.."</p>
      )}
    </div>
  );
};
export default HomePage;
