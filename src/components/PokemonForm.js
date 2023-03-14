import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleAdd}) {

  const [formData, setFormData] = useState({
    name: '',
    hp: '',
    front: '',
    back: ''
  })
  
  function handleSubmit(e) {
    e.preventDefault();
    const newPokemon = {
      name: formData.name,
      hp: parseInt(formData.hp),
      sprites: {
        front: formData.front,
        back: formData.back,
      }
    }
    fetch(`http://localhost:3001/pokemon`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newPokemon)
    })
    .then(r => r.json())
    .then((pokemon) => handleAdd(pokemon))
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    }
  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange = {handleChange} fluid label="Name" placeholder="Name" name="name" value = {formData.name}/>
          <Form.Input onChange = {handleChange} fluid label="hp" placeholder="hp" name="hp" value = {formData.hp}/>
          <Form.Input
            onChange = {handleChange}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            value = {formData.front}
          />
          <Form.Input
            onChange = {handleChange}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value = {formData.back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;

