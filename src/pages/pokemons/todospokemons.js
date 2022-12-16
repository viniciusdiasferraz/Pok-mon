import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './todospokemons.css';
import Modal from '../../components/Modal/modal';



function Pokemons() {
	const [answer, setAnswer] = useState();
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [valores, setValores] = useState();



	const selectPokemon = (name) => {
		setModalIsOpen(true)
		axios
			.get(
				`https://pokeapi.co/api/v2/pokemon/${name}`,
			)
			.then((response) => {
				setValores(response.data);
			})
	}

	const getPokemons = () => {
		axios
			.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
			.then((response) => {
				setAnswer(response?.data?.results)
			});
	};

	useEffect(() => {
		getPokemons()
	}, [])

	const pokemonFilter = (name) => {

		if (name === '') {
			getPokemons()
		}
		let filteredPokemons = []
		for (let i in answer) {
			if (answer[i].name?.toLowerCase()?.includes(name.toLowerCase())) {
				filteredPokemons.push(answer[i])
			}
		}
		setAnswer(filteredPokemons)

	}

	const closeModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

	return (
		
			<div onClick={() => closeModal()} className='containerall'>
				<Header />
				<div className='inputsearchpokemon'>
					<input onChange={(e) => pokemonFilter(e.target.value)} className='searchpokemon' type="search" id='pesquisa' name="q" placeholder="Buscar pokémon"></input>
				</div>
				<div className='containerpokemon'>
					{
						answer?.map((item, answer) => {

							const split1 = item?.url?.split('pokemon/')[1];
							const splitNumber = split1?.split('/')[0];
							
							return (
								
									<div className='cardpokemon' onClick={() => selectPokemon(item.name)} >
										<img className='imgpokemon' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${splitNumber}.png`} />
										<p className='namepokemon'>{item.name}</p>
									</div>
								
							)
						})
					}
				</div>

				<div className='modal'>
					{valores &&
						<Modal
							imagem={valores?.sprites?.other["official-artwork"]?.front_default}
							name={valores?.name}
							tipo={valores && valores?.types[0]?.type?.name}
							hp={valores && valores?.stats[0].base_stat}
							ataque={valores && valores?.stats[1].base_stat}
							defesa={valores && valores?.stats[2].base_stat}
							dataqueEspecial={valores && valores?.stats[3].base_stat}
							defesaEspecial={valores && valores?.stats[4].base_stat}
							velocidade={valores && valores?.stats[5].base_stat}
							setIsOpen={setModalIsOpen}
							isOpen={modalIsOpen}
						/>
					}
				</div>
				<Footer />
			</div>
		
	)
}





export default Pokemons