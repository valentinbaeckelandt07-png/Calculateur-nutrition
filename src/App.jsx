import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";

import Header from "./components/Header";
import SelectionProfil from "./components/SelectionProfil";
import Formulaire from "./components/Formulaire";
import Resultats from "./components/Resultats";
import Methodologie from "./components/Methodologie";
import APropos from "./components/APropos";
import FAQ from "./components/FAQ";
import HydratationFootballAvancee from "./components/HydratationFootballAvancee";
import SourcesScientifiques from "./components/SourcesScientifiques";

import {
  calculerBesoinsEnergetiques,
  calculerProteines,
  calculerLipides,
  calculerGlucides,
  calculerHydratation,
} from "./utils/calculs";

const HYDRATATION_FOOTBALL_INITIALE = {
  personnalisee: false,
  tauxSudation: "",
  dureeSeance: "",
};

function App() {
  const [profil, setProfil] = useState(null);
  const [resultats, setResultats] = useState(null);
  const [vueActive, setVueActive] =
    useState("accueil");

  const [
    hydratationFootball,
    setHydratationFootball,
  ] = useState(
    HYDRATATION_FOOTBALL_INITIALE
  );

  function calculer(formulaire) {
    if (
      profil === "football" &&
      hydratationFootball.personnalisee
    ) {
      const tauxSudation = Number(
        String(
          hydratationFootball.tauxSudation
        ).replace(",", ".")
      );

      const dureeSeance = Number(
        String(
          hydratationFootball.dureeSeance
        ).replace(",", ".")
      );

      if (
        !Number.isFinite(tauxSudation) ||
        tauxSudation <= 0 ||
        !Number.isFinite(dureeSeance) ||
        dureeSeance <= 0
      ) {
        window.alert(
          "Renseigne un taux de sudation et une durée de séance valides."
        );

        return;
      }
    }

    const besoinsEnergetiques =
      calculerBesoinsEnergetiques(formulaire);

    const proteines = calculerProteines(
      formulaire,
      profil
    );

    const lipides = calculerLipides(
      besoinsEnergetiques,
      profil
    );

    const glucides = calculerGlucides(
      besoinsEnergetiques,
      proteines,
      lipides
    );

    const hydratation = calculerHydratation(
      besoinsEnergetiques,
      profil,
      hydratationFootball
    );

    setResultats({
      besoinsEnergetiques,
      proteines,
      lipides,
      glucides,
      hydratation,
    });
  }

  function choisirProfil(nouveauProfil) {
    setProfil(nouveauProfil);
    setResultats(null);

    setHydratationFootball(
      HYDRATATION_FOOTBALL_INITIALE
    );
  }

  function changerProfil() {
    setProfil(null);
    setResultats(null);

    setHydratationFootball(
      HYDRATATION_FOOTBALL_INITIALE
    );
  }

  function reinitialiserResultats() {
    setResultats(null);
  }

  function modifierHydratationFootball(
    nouveauxParametres
  ) {
    setHydratationFootball(
      nouveauxParametres
    );

    setResultats(null);
  }

  function faireDefilerVers(idSection) {
    setVueActive("accueil");

    window.setTimeout(() => {
      document
        .getElementById(idSection)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 0);
  }

  function afficherAccueil() {
    faireDefilerVers("calculateur");
  }

  function afficherMethodologie() {
    faireDefilerVers("methodologie");
  }

  function afficherAPropos() {
    faireDefilerVers("a-propos");
  }

  function afficherSources() {
    setVueActive("sources");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100 p-6">
      <Header
        profil={profil}
        vueActive={vueActive}
        onAfficherAccueil={afficherAccueil}
        onAfficherSources={afficherSources}
        onAfficherMethodologie={
          afficherMethodologie
        }
        onAfficherAPropos={
          afficherAPropos
        }
      />

      {vueActive === "sources" ? (
        <SourcesScientifiques />
      ) : (
        <>
          <section
            id="calculateur"
            className="scroll-mt-40"
          >
            {!profil ? (
              <SelectionProfil
                onChoisirProfil={choisirProfil}
              />
            ) : (
              <div className="mx-auto max-w-5xl">
                <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                      Version sélectionnée
                    </p>

                    <h2 className="text-2xl font-extrabold text-slate-800">
                      {profil === "grand-public"
                        ? "Grand public"
                        : "Football performance"}
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={changerProfil}
                    className="rounded-xl border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Changer de profil
                  </button>
                </div>

                <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
                  <div className="space-y-6">
                    <Formulaire
                      onCalculer={calculer}
                      onReinitialiser={
                        reinitialiserResultats
                      }
                    />

                    {profil === "football" && (
                      <HydratationFootballAvancee
                        parametres={
                          hydratationFootball
                        }
                        onChange={
                          modifierHydratationFootball
                        }
                      />
                    )}
                  </div>

                  <Resultats
                    resultats={resultats}
                  />
                </div>
              </div>
            )}
          </section>

          {profil && (
            <Methodologie profil={profil} />
          )}

          <APropos />

          <FAQ />

          <p className="mx-auto mb-8 max-w-5xl text-center text-sm leading-relaxed text-slate-500">
            Alimelys fournit des estimations indicatives. Les résultats doivent
            être adaptés au contexte individuel et ne remplacent pas un suivi
            personnalisé par un diététicien.
          </p>
        </>
      )}

      <Analytics />
    </main>
  );
}

export default App;