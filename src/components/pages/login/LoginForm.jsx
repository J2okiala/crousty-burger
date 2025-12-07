import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import "./LoginForm.css";

export default function LoginForm() {

    const [prenom, setPrenom] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/order/${prenom}`);
        setPrenom("");
    };

    return (
        <div className="LoginFormStyled">
            <h1 className="title">Bienvenue chez nous !</h1>
            <div className="separator"></div>
            <h2 className="subtitle">Connectez-vous</h2>

            <form onSubmit={handleSubmit} className="formContent">
                <div className="inputWrapper">
                    <FaCircleUser className="inputIcon" />
                    <input
                        type="text"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                        placeholder="Entrez votre prénom..."
                        required
                    />
                </div>

                <button type="submit">
                    Accéder à mon espace →
                </button>
            </form>
        </div>
    );
}
