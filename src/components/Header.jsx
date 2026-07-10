import { Calculator } from "lucide-react";

function Header() {
  return (
    <header className="mb-10 rounded-3xl border border-white bg-white/90 px-6 py-5 shadow-xl backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-blue-600 p-3 text-white">
            <Calculator size={28} />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold text-slate-800">
              Calculateur Nutrition
            </h1>
            <p className="text-sm text-slate-500">
              Besoins énergétiques et macronutriments
            </p>
          </div>
        </div>

        <nav className="flex gap-5 text-sm font-semibold text-slate-600">
          <a className="text-blue-600" href="#">
            Calculateur
          </a>
          <a className="transition hover:text-blue-600" href="#">
            Méthodologie
          </a>
          <a className="transition hover:text-blue-600" href="#">
            À propos
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;