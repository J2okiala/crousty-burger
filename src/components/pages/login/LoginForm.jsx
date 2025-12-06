import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function LoginForm() {

    // state
    const [prenom, setPrenom] = useState("")
    const navigate = useNavigate()

    // comportement
    const handleSubmit = (e) => {
        e.preventDefault();
        // alert(`Bonjour ${prenom}`);
        setPrenom("")
        navigate(`/order/${prenom}`)
    };

    const handleChange = (event) => {
        setPrenom(event.target.value)
    }

    const LoginFormStyled = styled.div`border: 3px solid green; margin: 50px`

    // affichage (render)
    return (
        <LoginFormStyled>
            <form action="submit" onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-sm">
                <h1>Bienvenue chez nous !</h1>
                <br />
                <h2>Connectez-vous</h2>
                <input
                    type="text"
                    value={prenom}
                    onChange={handleChange}
                    placeholder="Entrez votre prénom..." 
                    required
                    className="border p-2 rounded-xl"
                />
                <button className="p-3 rounded-xl shadow font-semibold hover:opacity-90">
                    Accéder à votre espace
                </button>
            </form>
        </LoginFormStyled>
    )
}
