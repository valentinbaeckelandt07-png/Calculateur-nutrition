import {
  Droplets,
  Gauge,
  Clock3,
} from "lucide-react";

function HydratationFootballAvancee({
  parametres,
  onChange,
}) {
  function modifier(champ, valeur) {
    onChange({
      ...parametres,
      [champ]: valeur,
    });
  }

  return (
    <div className="rounded-3xl border border-cyan-200 bg-white p-6 shadow-lg">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-cyan-100 p-2 text-cyan-700">
          <Droplets size={22} />
        </div>

        <div>
          <h3 className="font-bold text-slate-800">
            Personnalisation de l’hydratation
          </h3>

          <p className="mt-1 text-sm leading-relaxed text-slate-600">
            Facultatif — à utiliser lorsque le joueur connaît
            son taux de sudation.
          </p>
        </div>
      </div>

      <label className="mt-5 flex cursor-pointer items-center gap-3 rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
        <input
          type="checkbox"
          checked={parametres.personnalisee}
          onChange={(event) =>
            modifier(
              "personnalisee",
              event.target.checked
            )
          }
          className="h-5 w-5 accent-cyan-600"
        />

        <span className="font-semibold text-slate-700">
          Je connais mon taux de sudation
        </span>
      </label>

      {parametres.personnalisee && (
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="taux-sudation"
              className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700"
            >
              <Gauge size={18} className="text-cyan-600" />
              Taux de sudation
            </label>

            <div className="relative">
              <input
                id="taux-sudation"
                type="number"
                min="0.1"
                max="5"
                step="0.1"
                inputMode="decimal"
                value={parametres.tauxSudation}
                onChange={(event) =>
                  modifier(
                    "tauxSudation",
                    event.target.value
                  )
                }
                placeholder="Ex. : 0,9"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-14 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />

              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-500">
                L/h
              </span>
            </div>
          </div>

          <div>
            <label
              htmlFor="duree-seance"
              className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700"
            >
              <Clock3 size={18} className="text-cyan-600" />
              Durée d’une séance
            </label>

            <div className="relative">
              <input
                id="duree-seance"
                type="number"
                min="15"
                max="300"
                step="5"
                inputMode="numeric"
                value={parametres.dureeSeance}
                onChange={(event) =>
                  modifier(
                    "dureeSeance",
                    event.target.value
                  )
                }
                placeholder="Ex. : 90"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-16 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />

              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-500">
                min
              </span>
            </div>
          </div>

          <p className="sm:col-span-2 text-sm leading-relaxed text-slate-500">
            La même durée est utilisée pour estimer les jours
            comprenant une ou deux séances.
          </p>
        </div>
      )}

      {!parametres.personnalisee && (
        <p className="mt-4 text-sm leading-relaxed text-slate-500">
          Sans personnalisation, Alimelys conserve le repère
          indicatif de 1 L supplémentaire par séance.
        </p>
      )}
    </div>
  );
}

export default HydratationFootballAvancee;