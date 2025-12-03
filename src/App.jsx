import './App.css'

function App() {

  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <p>Connectez-vous</p>
      <form className="flex flex-col gap-3 w-full max-w-sm">
      <input
        type="text"
        placeholder="Entrez votre prénom..."
        className="border p-2 rounded-xl"
      />
      <button
        type="submit"
        className="p-3 rounded-xl shadow font-semibold hover:opacity-90"
      >
        Accéder à votre espace
      </button>
      </form>
    </div>
  )
}

export default App
