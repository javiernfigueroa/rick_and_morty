
import {useState} from "react";
import "./App.css";
import Card from "./components/Card/Card.jsx";
import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import characters from "./data.js";


function App() {

  const [characters,setUsers] = useState([]);

  const searchUser = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json())
    .then((data) =>{
      if(data.name) {
        setUsers([...characters, data])
      } else {
        window.alert('No hay personajes con ese ID')
      }
  })
};

  //a partir de ahora tengo un estado que se llama user{}
  //set user es la funcion encargada de modificar el estado.

  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>
        <Cards characters={characters} />
      </div>
      <hr />
      <div class="searchBar">
        <SearchBar onSearch={searchUser} />
      </div>
    </div>
  );
}

export default App;
