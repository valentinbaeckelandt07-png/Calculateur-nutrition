import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Trophy,
  UserRound,
} from "lucide-react";

function SelectionProfil({ onChoisirProfil }) {
  return (
    <section className="mx-auto max-w-6xl">
      <div className="mb-10 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
          <Sparkles size={16} />
          Votre nutrition, adaptée à votre profil
        </div>

        <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Bienvenue sur NutriCalc
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          Choisissez la version adaptée à vos besoins pour obtenir une
          estimation personnalisée de vos besoins énergétiques et de vos
          macronutriments.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <button
          type="button"
          onClick={() => onChoisirProfil("grand-public")}
          className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 text-left shadow-xl transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-2xl"
        >
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-100/70 blur-3xl" />

          <div className="relative">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg">
              <UserRound size={38} strokeWidth={2} />
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              <UserRound size={17} />
              Grand public
            </div>

            <h3 className="mt-3 text-3xl font-black text-slate-900">
              Nutri<span className="text-green-600">Calc</span>
            </h3>

            <p className="mt-2 text-lg font-semibold text-slate-700">
              Nourrir le corps, optimiser la vie.
            </p>

            <p className="mt-4 leading-7 text-slate-500">
              Une estimation simple et claire pour mieux comprendre vos
              besoins du quotidien et organiser vos apports nutritionnels.
            </p>

            <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-slate-600">
              <ShieldCheck size={18} className="text-blue-600" />
              Recommandations adaptées au grand public
            </div>

            <div className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white shadow-lg transition group-hover:gap-3 group-hover:bg-blue-700">
              Accéder
              <ArrowRight size={19} />
            </div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => onChoisirProfil("football")}
          className="group relative overflow-hidden rounded-[2rem] border border-lime-200 bg-white p-8 text-left shadow-xl transition duration-300 hover:-translate-y-1 hover:border-lime-400 hover:shadow-2xl"
        >
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-lime-100/80 blur-3xl" />

          <div className="relative">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-green-500 to-lime-600 text-white shadow-lg">
              <Trophy size={38} strokeWidth={2} />
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-lime-600">
              <Trophy size={17} />
              Football performance
            </div>

            <h3 className="mt-3 text-3xl font-black text-slate-900">
              Nutri<span className="text-green-600">Calc</span> Football
            </h3>

            <p className="mt-2 text-lg font-semibold text-slate-700">
              La nutrition au service de la performance.
            </p>

            <p className="mt-4 leading-7 text-slate-500">
              Une version pensée pour les footballeurs de haut niveau, avec
              des recommandations favorisant la récupération et la
              performance.
            </p>

            <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-slate-600">
              <ShieldCheck size={18} className="text-lime-600" />
              Recommandations adaptées au football de haut niveau
            </div>

            <div className="mt-8 inline-flex items-center gap-2 rounded-xl bg-lime-600 px-5 py-3 font-bold text-white shadow-lg transition group-hover:gap-3 group-hover:bg-lime-700">
              Accéder
              <ArrowRight size={19} />
            </div>
          </div>
        </button>
      </div>

     
    </section>
  );
}

export default SelectionProfil;