import Logo from "./Logo";

function Header({ profil }) {
  const football = profil === "football";

  return (
    <header className="mx-auto mb-8 mt-4 max-w-6xl rounded-3xl border border-slate-200 bg-white px-6 py-4 shadow-md">
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
        <Logo
          version={football ? "football" : "grand-public"}
          largeur={125}
          className="shrink-0 object-contain"
        />

        <nav className="flex flex-wrap items-center justify-center gap-9 text-base font-bold text-slate-600 md:text-lg">
          <a
            href="#calculateur"
            className={`transition ${
              football
                ? "text-green-600 hover:text-green-700"
                : "text-blue-600 hover:text-blue-700"
            }`}
          >
            Calculateur
          </a>

          {profil && (
            <a
              href="#methodologie"
              className="transition hover:text-blue-600"
            >
              Méthodologie
            </a>
          )}

          <a
            href="#a-propos"
            className="transition hover:text-blue-600"
          >
            À propos
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;