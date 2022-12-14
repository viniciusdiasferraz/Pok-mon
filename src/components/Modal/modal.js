import '../Modal/modal.css'



function Modal({ imagem, name, tipo, hp, ataque, defesa, dataqueEspecial, defesaEspecial, velocidade, isOpen, setIsOpen }) {

	return (
		<>
			{ isOpen && (
				<div className='cardmodal'>
					<div className='buttonclose'>
						<button onClick={() => setIsOpen(false)}>X</button>
					</div>
					<div className='picturemodal'>
						<img src={imagem} alt={name} className='imgmodal' />
					</div>
					<div className='informationmodal'>
						<p>Nome: {name}</p>
						<p>Tipo: {tipo}</p>
						<p>HP: {hp}</p>
						<p>Ataque: {ataque}</p>
						<p>Defesa: {defesa}</p>
						<p>Ataque-Especial: {dataqueEspecial}</p>
						<p>Defesa-Especial: {defesaEspecial}</p>
						<p>Velocidade: {velocidade}</p>
					</div>
				</div>
			)}
		</>
	)
}

export default Modal