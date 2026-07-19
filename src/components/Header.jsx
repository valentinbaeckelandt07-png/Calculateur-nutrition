import Logo from "./Logo";

function Header({
  profil,
  vueActive,
  onAfficherAccueil,
  onAfficherSources,
  onAfficherMethodologie,
  onAfficherAPropos,
  onAfficherContact,
}) {
  const football = profil === "football";
  const surAccueil = vueActive === "accueil";
  const surSources = vueActive === "sources";
const surContact = vueActive === "contact";

  return (
    <header className="sticky top-3 z-50 mx-auto mb-8 mt-4 max-w-6xl rounded-3xl border border-slate-200 bg-white px-4 py-4 shadow-lg md:px-5 lg:px-6">
      <div className="flex flex-col items-center gap-4 md:grid md:grid-cols-[110px_minmax(0,1fr)_110px] md:gap-2 lg:grid-cols-[130px_minmax(0,1fr)_130px]">
        <button
          type="button"
          onClick={onAfficherAccueil}
          aria-label="Retour au calculateur Alimelys"
          className="shrink-0 md:justify-self-start"
        >
          <div className="w-[105px] lg:w-[125px]">
            <Logo
              version={
                football
                  ? "football"
                  : "grand-public"
              }
              largeur={125}
            />
          </div>
        </button>

        <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-base font-bold text-slate-600 md:flex-nowrap md:gap-x-2 md:text-sm lg:gap-x-6 lg:text-lg">
          <button
            type="button"
            onClick={onAfficherAccueil}
            className={`whitespace-nowrap rounded-xl px-2 py-2 transition lg:px-3 ${
              surAccueil
                ? football
                  ? "bg-green-50 text-green-700"
                  : "bg-blue-50 text-blue-700"
                : football
                  ? "hover:text-green-600"
                  : "hover:text-blue-600"
            }`}
          >
            Calculateur
          </button>

          {profil && surAccueil && (
            <button
              type="button"
              onClick={onAfficherMethodologie}
              className="whitespace-nowrap rounded-xl px-2 py-2 transition hover:text-blue-600 lg:px-3"
            >
              Méthodologie
            </button>
          )}

          <button
            type="button"
            onClick={onAfficherSources}
            className={`whitespace-nowrap rounded-xl px-2 py-2 transition lg:px-3 ${
              surSources
                ? "bg-blue-50 text-blue-700"
                : "hover:text-blue-600"
            }`}
          >
            Sources
          </button>

          <button
  type="button"
  onClick={onAfficherContact}
  className={`whitespace-nowrap rounded-xl px-2 py-2 transition lg:px-3 ${
    surContact
      ? "bg-blue-50 text-blue-700"
      : "hover:text-blue-600"
  }`}
>
  Contact
</button>
        </nav>

        <div
          aria-hidden="true"
          className="hidden md:block"
        />
      </div>
    </header>
  );
}

export default Header;