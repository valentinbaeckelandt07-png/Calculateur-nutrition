import { useState } from "react";
import Header from "./components/Header";
import SelectionProfil from "./components/SelectionProfil";
import Formulaire from "./components/Formulaire";
import Resultats from "./components/Resultats";
import {
  calculerBesoinsEnergetiques,
  calculerProteines,
  calculerLipides,
  calculerGlucides,
} from "./utils/calculs";

function App() {
  const [profil, setProfil] = useState(null);
  const [resultats, setResultats] = useState(null);

  function calculer(formulaire) {
    const besoinsEnergetiques = calculerBesoinsEnergetiques(formulaire);
    const proteines = calculerProteines(formulaire, profil);
    const lipides = calculerLipides(besoinsEnergetiques, profil);
    const glucides = calculerGlucides(
      besoinsEnergetiques,
      proteines,
      lipides
    );

    setResultats({
      besoinsEnergetiques,
      proteines,
      lipides,
      glucides,
    });
  }

  function choisirProfil(nouveauProfil) {
    setProfil(nouveauProfil);
    setResultats(null);
  }

  function changerProfil() {
    setProfil(null);
    setResultats(null);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100 p-6">
      <Header />

      {!profil ? (
        <SelectionProfil onChoisirProfil={choisirProfil} />
      ) : (
        <div className="mx-auto max-w-5xl">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                Version sélectionnée
              </p>

              <h2 className="text-2xl font-extrabold text-slate-800">
                {profil === "grand-public"
                  ? "Grand public"
                  : "Football performance"}
              </h2>
            </div>

            <button
              type="button"
              onClick={changerProfil}
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Changer de profil
            </button>
          </div>

          <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
            <Formulaire onCalculer={calculer} />
            <Resultats resultats={resultats} />
          </div>
        </div>
      )}
    </main>
  );
}

export default App;