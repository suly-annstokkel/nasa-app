//Importeer compontenten om ze te gebruiken 
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Earth from './video/Earth.mp4';

//Video als achtergrond toegevoegd op de startpagina en een link toevoegen voor de button op de start pagina
// die naar de nasaphoto path stuurt. 
export default function Home() {
return (
    <div className="home">
        <video autoPlay loop muted>
            <source src={Earth} type="video/mp4" />
        </video>
        <Link className="home-link" to="/nasaphoto">Dialy NASA news</Link>
    </div> 
)
}

