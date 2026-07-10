import { useState } from "react";
import { UserRound } from "lucide-react";

function Formulaire({ onCalculer }) {
  const [formulaire, setFormulaire] = useState({
    sexe: "Homme",
    age: "",
    taille: "",
    poids: "",
    activite: "",
    objectif: "",
  });

  function handleChange(e) {
    setFormulaire({
      ...formulaire,
      [e.target.name]: e.target.value,
    });
  }

  function reinitialiserFormulaire() {
    setFormulaire({
      sexe: "Homme",
      age: "",
      taille: "",
      poids: "",
      activite: "",
      objectif: "",
    });
  }
const formulaireValide =
  formulaire.age &&
  formulaire.taille &&
  formulaire.poids &&
  formulaire.activite &&
  formulaire.objectif;
  return (
    <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-6 border border-white">
      <h2 className="flex items-center gap-2 text-xl font-bold mb-6 text-slate-800">
        <UserRound size={24} className="text-blue-600" />
        Informations
      </h2>

      <div className="space-y-5">
        <div>
          <label className="font-semibold text-slate-700">Sexe</label>
          <select
            name="sexe"
            value={formulaire.sexe}
            onChange={handleChange}
            className="w-full mt-1 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          >
            <option>Homme</option>
            <option>Femme</option>
          </select>
        </div>

        <div>
          <label className="font-semibold text-slate-700">Âge</label>
          <input
            type="number"
            name="age"
            value={formulaire.age}
            onChange={handleChange}
            className="w-full mt-1 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          />
        </div>

        <div>
          <label className="font-semibold text-slate-700">Taille (m)</label>
          <input
            type="number"
            step="0.01"
            name="taille"
            value={formulaire.taille}
            onChange={handleChange}
            className="w-full mt-1 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          />
        </div>

        <div>
          <label className="font-semibold text-slate-700">Poids (kg)</label>
          <input
            type="number"
            step="0.1"
            name="poids"
            value={formulaire.poids}
            onChange={handleChange}
            className="w-full mt-1 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          />
        </div>

        <div>
          <label className="font-semibold text-slate-700">
            Activité physique
          </label>
          <select
            name="activite"
            value={formulaire.activite}
            onChange={handleChange}
            className="w-full mt-1 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          >
            <option value="">Choisir...</option>
            <option>Sédentaire</option>
            <option>Faiblement actif</option>
            <option>Modérément actif</option>
            <option>Très actif</option>
            <option>Extrêmement actif</option>
          </select>
        </div>

        <div>
          <label className="font-semibold text-slate-700">Objectif</label>
          <select
            name="objectif"
            value={formulaire.objectif}
            onChange={handleChange}
            className="w-full mt-1 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          >
            <option value="">Choisir...</option>
            <option>Perte de masse grasse</option>
            <option>Maintien</option>
            <option>Prise de masse</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <button
            type="button"
            onClick={reinitialiserFormulaire}
            className="rounded-xl border border-slate-300 bg-white py-3 font-bold text-slate-700 transition hover:bg-slate-100"
          >
            Réinitialiser
          </button>

          <button
  type="button"
  onClick={() => onCalculer(formulaire)}
  disabled={!formulaireValide}
  className={`rounded-xl py-3 font-bold text-white shadow-lg transition ${
    formulaireValide
      ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.02]"
      : "cursor-not-allowed bg-slate-300"
  }`}
>
  Calculer
</button>
        </div>
      </div>
    </div>
  );
}

export default Formulaire;