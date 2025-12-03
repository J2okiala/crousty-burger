import { useState } from "react";


export default function LoginPage() {

    // state
    const [prenom, setPrenom] = useState("");

    // comportement
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Bonjour ${prenom}`);
        setPrenom("")
    };

    const handleChange = (event) => {
        setPrenom(event.target.value)
    }

    // affichage (render)
    return (
        <div>
            <h1>Bienvenue chez nous !</h1>
            <h2>Connectez-vous</h2>
            <form action="submit" onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-sm">
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
        </div>
    )
}
