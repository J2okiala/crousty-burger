import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function OrderPage() {
    //state
    const { prenom} = useParams()

    //comportements

    //affichage
    return (
        <div>
            <h2>Bonjour {prenom}</h2>
            <Link to={'/'}>
                <button>Deconnexion</button>
            </Link>
        
        </div>
    )
}
