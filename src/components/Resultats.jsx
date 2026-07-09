function Resultats({ resultats }) {
  return (
    <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-6 border border-white">
      <h2 className="text-xl font-bold mb-6 text-slate-800">📊 Résultats</h2>

      {!resultats ? (
        <p className="text-slate-500">
          Remplissez le formulaire puis cliquez sur Calculer.
        </p>
      ) : (
        <div className="grid gap-4">
          <CarteResultat
            icone="🔥"
            titre="Besoins énergétiques"
            valeur={`${resultats.besoinsEnergetiques} kcal`}
          />

          <CarteResultat
            icone="🥩"
            titre="Protéines"
            valeur={`${resultats.proteines.min} - ${resultats.proteines.max} g`}
          />

          <CarteResultat
            icone="🥑"
            titre="Lipides"
            valeur={`${resultats.lipides.min} - ${resultats.lipides.max} g`}
          />

          <CarteResultat
            icone="🍚"
            titre="Glucides"
            valeur={`${resultats.glucides.min} - ${resultats.glucides.max} g`}
          />
        </div>
      )}
    </div>
  );
}

function CarteResultat({ icone, titre, valeur }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
      <div className="text-sm text-slate-500">
        {icone} {titre}
      </div>
      <div className="text-2xl font-extrabold text-slate-800 mt-1">
        {valeur}
      </div>
    </div>
  );
}

export default Resultats;