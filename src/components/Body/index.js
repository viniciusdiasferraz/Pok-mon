import React from "react";
import './index.css';

export default function Body() {
    return (
        <div className="startbackground">
            <div className='containersearch'>
            <input onChange={(e) => (e.target.value)} className='' type="search" id='pesquisa' name="q" placeholder="Pesquise seu pokémon"></input>
                <button className="buttonsearch" onClick={()=>window.location.href='http:/todospokemons'}> Veja todos os pokémons</button>
            </div>
        </div>
    )
}