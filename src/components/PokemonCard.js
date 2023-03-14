import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  const [isActive, setIsActive] = useState(false);

  const {name, hp, sprites} = pokemon;

  function handleImgFlip() {
    setIsActive(!isActive)
  }

  return (
    <Card >
      <div onClick = {handleImgFlip}>
        <div className="image">
          <img alt="oh no!" src = {isActive ? sprites.back : sprites.front}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
