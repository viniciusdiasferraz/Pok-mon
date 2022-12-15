import React, { useState } from "react";
import './index.css';
import Modal from '../../components/Modal/modal';
import axios from "axios";




export default function Body() {
  const [valores1, setValores1] = useState()
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [poke, setPoke] = useState("")


  const PokemonSelected = () => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${poke}`,
      )
      .then((response) => {
        setValores1(response.data);
        setModalIsOpen(true);
      })
  }

  const closeModal = () => {
    setModalIsOpen(false);

  }

  const fail = () => {
    if (poke === '')
    alert("Digite o pokémon desejado!")
  }

  return (
    <div onClick={() => closeModal()} className="startbackground">
      <div className='containersearch'>
        <input onChange={(e) => setPoke(e.target.value.toLowerCase(poke))} className='searchindex' type="search" placeholder="Pesquise seu pokémon"></input>
        <button className="buttonyourpokemon" onClick={() => {PokemonSelected(); fail()}}>Buscar</button>
        <button className="buttonsearch" onClick={() => window.location.href = 'http:/todospokemons'}> Veja todos os pokémons</button>
      </div>

      <div className='modal'>
        {
          valores1 &&
          <Modal
            imagem={valores1?.sprites?.other["official-artwork"]?.front_default}
            name={valores1?.name}
            tipo={valores1 && valores1?.types[0]?.type?.name}
            hp={valores1 && valores1?.stats[0].base_stat}
            ataque={valores1 && valores1?.stats[1].base_stat}
            defesa={valores1 && valores1?.stats[2].base_stat}
            dataqueEspecial={valores1 && valores1?.stats[3].base_stat}
            defesaEspecial={valores1 && valores1?.stats[4].base_stat}
            velocidade={valores1 && valores1?.stats[5].base_stat}
            setIsOpen={setModalIsOpen}
            isOpen={modalIsOpen}
          />
        }
      </div>
    </div>

  )
}