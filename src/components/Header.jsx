import { useState } from "react";
import { Menu, X } from "lucide-react";

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
  const [menuMobileOuvert, setMenuMobileOuvert] =
    useState(false);

  const football = profil === "football";
  const surAccueil = vueActive === "accueil";
  const surSources = vueActive === "sources";
  const surContact = vueActive === "contact";

  const couleurActive = football
    ? "bg-green-50 text-green-700"
    : "bg-blue-50 text-blue-700";

  const couleurSurvol = football
    ? "hover:text-green-600"
    : "hover:text-blue-600";

  function fermerMenuMobile() {
    setMenuMobileOuvert(false);
  }

  function afficherAccueil() {
    onAfficherAccueil();
    fermerMenuMobile();
  }

  function afficherMethodologie() {
    onAfficherMethodologie();
    fermerMenuMobile();
  }

  function afficherSources() {
    onAfficherSources();
    fermerMenuMobile();
  }

  function afficherAPropos() {
    onAfficherAPropos();
    fermerMenuMobile();
  }

  function afficherContact() {
    onAfficherContact();
    fermerMenuMobile();
  }

  return (
    <header className="sticky top-3 z-50 mx-auto mb-6 mt-3 max-w-6xl rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg md:mb-8 md:mt-4 md:rounded-3xl md:px-5 md:py-4 lg:px-6">
      {/* Version smartphone */}
      <div className="md:hidden">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={afficherAccueil}
            aria-label="Retour au calculateur Alimelys"
            className="shrink-0"
          >
            <div className="w-[105px]">
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

          <button
            type="button"
            onClick={() =>
              setMenuMobileOuvert(
                (menuOuvert) => !menuOuvert
              )
            }
            aria-label={
              menuMobileOuvert
                ? "Fermer le menu"
                : "Ouvrir le menu"
            }
            aria-expanded={menuMobileOuvert}
            className={`flex h-11 w-11 items-center justify-center rounded-xl border transition ${
              menuMobileOuvert
                ? football
                  ? "border-green-200 bg-green-50 text-green-700"
                  : "border-blue-200 bg-blue-50 text-blue-700"
                : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
            }`}
          >
            {menuMobileOuvert ? (
              <X size={24} strokeWidth={2.3} />
            ) : (
              <Menu
                size={24}
                strokeWidth={2.3}
              />
            )}
          </button>
        </div>

        {menuMobileOuvert && (
          <nav className="mt-3 grid gap-2 border-t border-slate-200 pt-3 font-bold text-slate-700">
            <button
              type="button"
              onClick={afficherAccueil}
              className={`w-full rounded-xl px-4 py-3 text-left transition ${
                surAccueil
                  ? couleurActive
                  : `bg-slate-50 ${couleurSurvol}`
              }`}
            >
              Calculateur
            </button>

            {profil && surAccueil && (
              <button
                type="button"
                onClick={afficherMethodologie}
                className={`w-full rounded-xl bg-slate-50 px-4 py-3 text-left transition ${couleurSurvol}`}
              >
                Méthodologie
              </button>
            )}

            <button
              type="button"
              onClick={afficherSources}
              className={`w-full rounded-xl px-4 py-3 text-left transition ${
                surSources
                  ? couleurActive
                  : `bg-slate-50 ${couleurSurvol}`
              }`}
            >
              Sources
            </button>

            <button
              type="button"
              onClick={afficherAPropos}
              className={`w-full rounded-xl bg-slate-50 px-4 py-3 text-left transition ${couleurSurvol}`}
            >
              À propos
            </button>

            <button
              type="button"
              onClick={afficherContact}
              className={`w-full rounded-xl px-4 py-3 text-left transition ${
                surContact
                  ? couleurActive
                  : `bg-slate-50 ${couleurSurvol}`
              }`}
            >
              Contact
            </button>
          </nav>
        )}
      </div>

      {/* Version ordinateur */}
      <div className="hidden md:grid md:grid-cols-[110px_minmax(0,1fr)_110px] md:items-center md:gap-2 lg:grid-cols-[130px_minmax(0,1fr)_130px]">
        <button
          type="button"
          onClick={onAfficherAccueil}
          aria-label="Retour au calculateur Alimelys"
          className="shrink-0 justify-self-start"
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

        <nav className="flex flex-nowrap items-center justify-center gap-x-1 text-sm font-bold text-slate-600 lg:gap-x-3 lg:text-base xl:gap-x-5 xl:text-lg">
          <button
            type="button"
            onClick={onAfficherAccueil}
            className={`whitespace-nowrap rounded-xl px-2 py-2 transition xl:px-3 ${
              surAccueil
                ? couleurActive
                : couleurSurvol
            }`}
          >
            Calculateur
          </button>

          {profil && surAccueil && (
            <button
              type="button"
              onClick={onAfficherMethodologie}
              className={`whitespace-nowrap rounded-xl px-2 py-2 transition xl:px-3 ${couleurSurvol}`}
            >
              Méthodologie
            </button>
          )}

          <button
            type="button"
            onClick={onAfficherSources}
            className={`whitespace-nowrap rounded-xl px-2 py-2 transition xl:px-3 ${
              surSources
                ? couleurActive
                : couleurSurvol
            }`}
          >
            Sources
          </button>

          <button
            type="button"
            onClick={onAfficherAPropos}
            className={`whitespace-nowrap rounded-xl px-2 py-2 transition xl:px-3 ${couleurSurvol}`}
          >
            À propos
          </button>

          <button
            type="button"
            onClick={onAfficherContact}
            className={`whitespace-nowrap rounded-xl px-2 py-2 transition xl:px-3 ${
              surContact
                ? couleurActive
                : couleurSurvol
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