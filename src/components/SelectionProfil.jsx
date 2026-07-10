import { UserRound, Trophy } from "lucide-react";

function SelectionProfil({ onChoisirProfil }) {
  return (
    <section className="mx-auto max-w-5xl">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold text-slate-800">
          Choisissez votre profil
        </h2>

        <p className="mt-2 text-slate-500">
          Les recommandations seront adaptées à votre situation.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <button
          type="button"
          onClick={() => onChoisirProfil("grand-public")}
          className="group rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-xl transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-2xl"
        >
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
            <UserRound size={30} />
          </div>

          <h3 className="text-2xl font-extrabold text-slate-800">
            Grand public
          </h3>

          <p className="mt-3 text-slate-500">
            Pour estimer les besoins énergétiques et les macronutriments du
            quotidien.
          </p>

          <div className="mt-6 font-bold text-blue-600 transition group-hover:translate-x-1">
            Accéder au calculateur →
          </div>
        </button>

        <button
          type="button"
          onClick={() => onChoisirProfil("football")}
          className="group rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-xl transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-2xl"
        >
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
            <Trophy size={30} />
          </div>

          <h3 className="text-2xl font-extrabold text-slate-800">
            Football performance
          </h3>

          <p className="mt-3 text-slate-500">
            Pour les footballeurs de haut niveau avec des recommandations
            adaptées à la performance et à la récupération.
          </p>

          <div className="mt-6 font-bold text-indigo-600 transition group-hover:translate-x-1">
            Accéder au calculateur →
          </div>
        </button>
      </div>
    </section>
  );
}

export default SelectionProfil;