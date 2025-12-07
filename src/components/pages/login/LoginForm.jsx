import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import "./LoginForm.css";
import Input from "../../reusable-ui/Input";
import Button from "../../reusable-ui/Button";

export default function LoginForm() {

    const [prenom, setPrenom] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/order/${prenom}`);
        setPrenom("");
    };

    return (
        <form action="submit" onSubmit={handleSubmit} className="formContent">
            <h1 className="title">Bienvenue chez nous !</h1>
            <div className="separator"></div>
            <h2 className="subtitle">Connectez-vous</h2>

            <Input
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                placeholder="Entrez votre prénom..."
                required
                icon={FaCircleUser}
            />

            <Button type="submit">
                Accéder à votre espace
            </Button>
        </form>
    );
}
