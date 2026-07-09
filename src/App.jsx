import { useState } from "react";
import Formulaire from "./components/Formulaire";
import Resultats from "./components/Resultats";
import {
  calculerBesoinsEnergetiques,
  calculerProteines,
  calculerLipides,
  calculerGlucides,
} from "./utils/calculs";

function App() {
  const [resultats, setResultats] = useState(null);

  function calculer(formulaire) {
   const besoinsEnergetiques = calculerBesoinsEnergetiques(formulaire);
const proteines = calculerProteines(formulaire);
const lipides = calculerLipides(besoinsEnergetiques);
const glucides = calculerGlucides(besoinsEnergetiques, proteines, lipides);
setResultats({
  besoinsEnergetiques,
  proteines,
  lipides,
  glucides,
});
  }

  return (
   <main className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100 p-6">
      <div className="text-center mb-10">
  <h1 className="text-4xl font-extrabold text-slate-800">
    🥗 Calculateur Nutrition
  </h1>
  <p className="text-slate-600 mt-2">
    Estimez vos besoins énergétiques et en macronutriments
  </p>
</div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        <Formulaire onCalculer={calculer} />
        <Resultats resultats={resultats} />
      </div>
    </main>
  );
}

export default App;