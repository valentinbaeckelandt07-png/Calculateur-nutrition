import {
  ChartColumn,
  Flame,
  Dumbbell,
  Droplets,
  Wheat,
} from "lucide-react";

function Resultats({ resultats }) {
  return (
    <div className="rounded-3xl border border-white bg-white/90 p-6 shadow-xl">
      <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-800">
        <ChartColumn size={24} className="text-blue-600" />
        Résultats
      </h2>

      {!resultats ? (
        <p className="text-slate-500">
          Remplissez le formulaire puis cliquez sur Calculer.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          <CarteResultat
            icone={Flame}
            titre="Besoins énergétiques"
            valeur={`${resultats.besoinsEnergetiques} kcal`}
            couleur="orange"
          />

          <CarteResultat
            icone={Dumbbell}
            titre="Protéines"
            valeur={`${resultats.proteines.min} - ${resultats.proteines.max} g`}
            couleur="blue"
          />

          <CarteResultat
            icone={Droplets}
            titre="Lipides"
            valeur={`${resultats.lipides.min} - ${resultats.lipides.max} g`}
            couleur="purple"
          />

          <CarteResultat
            icone={Wheat}
            titre="Glucides"
            valeur={`${resultats.glucides.min} - ${resultats.glucides.max} g`}
            couleur="green"
          />
        </div>
      )}
    </div>
  );
}

function CarteResultat({
  icone: Icone,
  titre,
  valeur,
  couleur,
}) {
  const styles = {
    orange: "bg-orange-50 border-orange-200 text-orange-700",
    blue: "bg-blue-50 border-blue-200 text-blue-700",
    purple: "bg-purple-50 border-purple-200 text-purple-700",
    green: "bg-green-50 border-green-200 text-green-700",
  };

  return (
    <div
      className={`rounded-2xl border p-5 transition hover:-1 hover:shadow-md ${styles[couleur]}`}
    >
      <div className="flex items-center gap-2 text-sm font-semibold">
        <Icone size={20} />
        <span>{titre}</span>
      </div>

      <div className="mt-3 text-2xl font-extrabold">
        {valeur}
      </div>
    </div>
  );
}

export default Resultats;