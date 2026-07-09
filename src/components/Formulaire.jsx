import { useState } from "react";

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

  return (
    <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-6 border border-white">
      <h2 className="text-xl font-bold mb-4">
  Informations
</h2>

      <label className="font-semibold text-slate-700">
  Sexe
</label>
      <br />
<select
  name="sexe"
  value={formulaire.sexe}
  onChange={handleChange}
  className="w-full mt-1 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
>
        <option>Homme</option>
        <option>Femme</option>
      </select>

      <br /><br />

      <label className="font-semibold text-slate-700">
  Âge
</label>
      <br />
      <input
  type="number"
  name="age"
  value={formulaire.age}
  onChange={handleChange}
  className="w-full mt-1 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
/>

      <br /><br />

      <label className="font-semibold text-slate-700">
  Taille (m)
</label>
      <br />
     <input
  type="number"
  step="0.01"
  name="taille"
  value={formulaire.taille}
  onChange={handleChange}
  className="w-full mt-1 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
/>

      <br /><br />

      <label className="font-semibold text-slate-700">
  Poids (kg)
</label>
      <br />
      <input
  type="number"
  step="0.1"
  name="poids"
  value={formulaire.poids}
  onChange={handleChange}
  className="w-full mt-1 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
/>

      <br /><br />

      <label className="font-semibold text-slate-700">
  Activité physique
</label>
      <br />
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

      <br /><br />

      <label className="font-semibold text-slate-700">
  Objectif
</label>
      <br />
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

      <br /><br />

      <button
  onClick={() => onCalculer(formulaire)}
  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 rounded-xl hover:scale-[1.02] transition shadow-lg"
>
  Calculer
</button>
    </div>
  );
}

export default Formulaire;