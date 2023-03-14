import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({}) {

  const [pokemonList, setPokemonList] = useState([])
  const [search, setSearch] = useState("")


  useEffect(() => {
    fetch(`http://localhost:3001/pokemon`)
    .then(r => r.json())
    .then(pokemon => {
      setPokemonList(pokemon)
    });
  },[])

  const pokemonFilter = pokemonList.filter(pokemon => pokemon.name.toLowerCase().startsWith(search.toLowerCase()))

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  function handleAdd(newPokemon) {
    setPokemonList([...pokemonList, newPokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleAdd = {handleAdd}/>
      <br />
      <Search search = {search} handleSearch = {handleSearch}/>
      <br />
      <PokemonCollection pokemonFilter = {pokemonFilter} pokemonList = {pokemonList} />
    </Container>
  );
}

export default PokemonPage;
