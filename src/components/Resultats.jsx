import {
  ChartColumn,
  Flame,
  Dumbbell,
  Droplets,
  Wheat,
  GlassWater,
} from "lucide-react";

function Resultats({ resultats }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
      <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-800">
        <ChartColumn
          size={24}
          className="text-blue-600"
        />

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

          {resultats.hydratation?.type ===
            "grand-public" && (
            <CarteResultat
              icone={GlassWater}
              titre="Hydratation quotidienne"
              valeur={`${resultats.hydratation.boissonsL} L de boissons`}
              sousValeur={`Environ ${resultats.hydratation.eauTotaleL} L d’eau totale, aliments compris`}
              note="À ajuster selon les pertes sudorales, l’activité physique, la température et le contexte individuel."
              couleur="cyan"
              className="sm:col-span-2"
            />
          )}

          {resultats.hydratation?.type ===
            "football" && (
            <CarteHydratationFootball
              hydratation={resultats.hydratation}
            />
          )}
        </div>
      )}
    </div>
  );
}

function CarteHydratationFootball({
  hydratation,
}) {
  return (
    <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5 text-cyan-800 transition hover:-translate-y-1 hover:shadow-md sm:col-span-2">
      <div className="flex items-center gap-2 text-sm font-semibold">
        <GlassWater size={20} />

        <span>Repères hydriques quotidiens</span>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <RepereHydrique
          titre="Jour de repos"
          valeur={`${hydratation.jourReposL} L`}
        />

        <RepereHydrique
          titre="Jour avec 1 séance"
          valeur={`${hydratation.uneSeanceL} L`}
        />

        <RepereHydrique
          titre="Jour avec 2 séances"
          valeur={`${hydratation.deuxSeancesL} L`}
        />
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        Ces valeurs sont des estimations. Le supplément
        indicatif de 1 L par séance doit être adapté à la
        durée et à l’intensité de l’effort, aux conditions
        climatiques ainsi qu’aux pertes sudorales réelles du
        joueur.
      </p>
    </div>
  );
}

function RepereHydrique({
  titre,
  valeur,
}) {
  return (
    <div className="rounded-xl border border-cyan-200 bg-white/70 p-4 text-center">
      <p className="text-sm font-semibold text-slate-600">
        {titre}
      </p>

      <p className="mt-2 text-2xl font-extrabold text-cyan-700">
        {valeur}
      </p>

      <p className="mt-1 text-xs text-slate-500">
        de boissons
      </p>
    </div>
  );
}

function CarteResultat({
  icone: Icone,
  titre,
  valeur,
  sousValeur,
  note,
  couleur,
  className = "",
}) {
  const styles = {
    orange:
      "bg-orange-50 border-orange-200 text-orange-700",
    blue:
      "bg-blue-50 border-blue-200 text-blue-700",
    purple:
      "bg-purple-50 border-purple-200 text-purple-700",
    green:
      "bg-green-50 border-green-200 text-green-700",
    cyan:
      "bg-cyan-50 border-cyan-200 text-cyan-700",
  };

  return (
    <div
      className={`rounded-2xl border p-5 transition hover:-translate-y-1 hover:shadow-md ${styles[couleur]} ${className}`}
    >
      <div className="flex items-center gap-2 text-sm font-semibold">
        <Icone size={20} />
        <span>{titre}</span>
      </div>

      <div className="mt-3 text-2xl font-extrabold">
        {valeur}
      </div>

      {sousValeur && (
        <p className="mt-2 text-sm font-semibold opacity-80">
          {sousValeur}
        </p>
      )}

      {note && (
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {note}
        </p>
      )}
    </div>
  );
}

export default Resultats;