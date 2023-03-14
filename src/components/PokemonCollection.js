import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonFilter}) {

  return (
    <Card.Group itemsPerRow={6}>
        {pokemonFilter.map(pokemon =>
      <PokemonCard pokemon = {pokemon} key = {pokemon.name}/> )}
    </Card.Group>
  );
}

export default PokemonCollection;
