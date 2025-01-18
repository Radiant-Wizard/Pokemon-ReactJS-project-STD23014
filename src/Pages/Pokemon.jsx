import { useRef, useState } from "react";
import { api } from "../Api/api";
import PokemonCard from "../Components/pokemonComponent";
import { useNavigate } from "react-router";

export function PokemonSearch() {
  const navigate = useNavigate();
  const searchRef = useRef();

  const search = async () => {
    try {
      const searchValue = searchRef.current.value.toLowerCase();
      if (searchValue == "") {
        alert("Please enter a pokemon name");
        return;
      } else {        
        const result = await api.get(`pokemon/${searchValue}`);
        navigate(`/pokemon`, { state: { pokemon: result.data } });
        searchRef.current.value = "";
      } 
    } catch (error) {
      if (error.response.status === 404) {
        alert("pokemon not found");
      }
      else {
        console.log(error);
      }
    }
  };

  const RandomValue = async () => {
    const RandomID = Math.floor(Math.random() * 1000 + 1);
    try {
      const result = await api.get(`pokemon/${RandomID}`);
      navigate(`/pokemon`, { state: { pokemon: result.data } });
      console.log(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div >
      <h1>Pokemon</h1>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '1rem' }} >
        <input type="text" ref={searchRef} />
        <button onClick={search}>Search</button>
        <button onClick={RandomValue}>random</button>
      </div>
    </div >
  );
}
