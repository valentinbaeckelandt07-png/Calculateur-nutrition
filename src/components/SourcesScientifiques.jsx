import {
  BookOpen,
  Flame,
  Dumbbell,
  Droplets,
  Goal,
  ExternalLink,
  Info,
  ShieldCheck,
} from "lucide-react";

const groupesSources = [
  {
    titre: "Besoins énergétiques",
    icone: Flame,
    couleur: "orange",
    sources: [
      {
        auteurs:
          "Black A. E., Coward W. A., Cole T. J. et Prentice A. M.",
        annee: "1996",
        titre:
          "Human energy expenditure in affluent societies: an analysis of 574 doubly-labelled water measurements.",
        revue:
          "European Journal of Clinical Nutrition, 50, 72–92.",
        utilisation:
          "Référence associée à l’équation de Black utilisée par Alimelys pour estimer le métabolisme de base à partir du sexe, de l’âge, du poids et de la taille.",
        lien:
          "https://pubmed.ncbi.nlm.nih.gov/8641250/",
      },
      {
        auteurs:
          "EFSA Panel on Dietetic Products, Nutrition and Allergies",
        annee: "2013",
        titre:
          "Scientific Opinion on Dietary Reference Values for energy.",
        revue: "EFSA Journal, 11(1), 3005.",
        utilisation:
          "Cadre scientifique européen concernant l’estimation des besoins énergétiques et les niveaux d’activité physique.",
        lien:
          "https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2013.3005",
      },
    ],
  },
  {
    titre: "Macronutriments",
    icone: Dumbbell,
    couleur: "blue",
    sources: [
      {
        auteurs:
          "Jäger R., Kerksick C. M., Campbell B. I. et collaborateurs",
        annee: "2017",
        titre:
          "International Society of Sports Nutrition Position Stand: protein and exercise.",
        revue:
          "Journal of the International Society of Sports Nutrition, 14, 20.",
        utilisation:
          "Référence concernant l’adaptation des apports protéiques chez les personnes physiquement actives.",
        lien:
          "https://pubmed.ncbi.nlm.nih.gov/28642676/",
      },
      {
        auteurs:
          "EFSA Panel on Dietetic Products, Nutrition and Allergies",
        annee: "2010",
        titre:
          "Scientific Opinion on Dietary Reference Values for fats.",
        revue: "EFSA Journal, 8(3), 1461.",
        utilisation:
          "Référence européenne concernant la contribution des lipides à l’apport énergétique total.",
        lien:
          "https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2010.1461",
      },
    ],
  },
  {
    titre: "Hydratation",
    icone: Droplets,
    couleur: "cyan",
    sources: [
      {
        auteurs: "National Research Council",
        annee: "1989",
        titre:
          "Water and Electrolytes — Recommended Dietary Allowances.",
        revue: "National Academies Press.",
        utilisation:
          "Origine du repère pratique historique de 1 mL d’eau par kilocalorie dans des conditions moyennes.",
        lien:
          "https://www.ncbi.nlm.nih.gov/books/NBK234935/",
      },
     {
  auteurs:
    "Institute of Medicine, Food and Nutrition Board",
  annee: "2005",
  titre:
    "Dietary Reference Intakes for Water, Potassium, Sodium, Chloride, and Sulfate.",
  revue:
    "The National Academies Press, Washington, DC.",
  utilisation:
    "Référence concernant la répartition des apports hydriques. Les données présentées indiquent qu’environ 73 à 80 % de l’eau totale consommée provient de l’eau et des autres boissons, tandis qu’environ 20 à 27 % provient des aliments. Alimelys retient une estimation pratique de 75 % provenant des boissons.",
  lien:
    "https://www.nationalacademies.org/read/10925/chapter/6",
},
      {
        auteurs:
          "McDermott B. P., Anderson S. A., Armstrong L. E. et collaborateurs",
        annee: "2017",
        titre:
          "National Athletic Trainers’ Association Position Statement: Fluid Replacement for the Physically Active.",
        revue:
          "Journal of Athletic Training, 52(9), 877–895.",
        utilisation:
          "Référence pour l’individualisation de l’hydratation selon le taux de sudation, l’environnement et les caractéristiques de l’effort.",
        lien:
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC5634236/",
      },
    ],
  },
  {
  titre: "Football de haut niveau",
  icone: Goal,
  couleur: "green",
  sources: [
    {
      auteurs:
        "Oukheda M., Lebrazi H., Derouiche A., Kettani A., Saile R. et Taki H.",
      annee: "2024",
      titre:
        "Performance variables and nutritional status analysis from Moroccan professional and adolescent football players during the competition period: a descriptive study.",
      revue:
        "Frontiers in Sports and Active Living, 6, 1372381.",
      utilisation:
        "Étude observationnelle menée auprès de 277 footballeurs marocains. Des apports plus élevés en glucides et en protéines étaient positivement associés à la distance parcourue lors du test Yo-Yo IR1. À l’inverse, une proportion énergétique plus élevée provenant des lipides était associée à une distance parcourue plus faible. Cette étude appuie l’intérêt d’une répartition des macronutriments adaptée aux exigences du football.",
      lien:
        "https://www.frontiersin.org/journals/sports-and-active-living/articles/10.3389/fspor.2024.1372381/full",
    },
    
  ],
},
];

function SourcesScientifiques() {
  return (
    <section
      id="sources"
      className="mx-auto my-12 max-w-5xl scroll-mt-40"
    >
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
        <div className="bg-slate-900 px-6 py-9 text-white md:px-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-cyan-300">
                <BookOpen size={18} />
                Transparence scientifique
              </p>

              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Sources scientifiques
              </h2>

              <p className="mt-4 leading-relaxed text-slate-300">
                Les calculs et repères proposés par Alimelys
                s’appuient sur des publications scientifiques,
                des avis d’experts et des recommandations
                institutionnelles.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3">
              <ShieldCheck
                size={24}
                className="text-green-400"
              />

              <div>
                <p className="text-sm font-bold">
                  Dernière révision
                </p>

                <p className="text-sm text-slate-300">
                  Juillet 2026
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 p-6 md:p-10">
          {groupesSources.map((groupe) => (
            <GroupeSources
              key={groupe.titre}
              groupe={groupe}
            />
          ))}

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex items-start gap-3">
              <Info
                size={22}
                className="mt-0.5 shrink-0 text-amber-700"
              />

              <div>
                <h3 className="font-bold text-amber-900">
                  Choix méthodologiques d’Alimelys
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Certaines valeurs sont des paramètres
                  pratiques retenus pour rendre le calculateur
                  simple à utiliser. C’est notamment le cas du
                  déficit de 15 %, du surplus de 7 % et du
                  supplément standard de 1 L par séance lorsque
                  le taux de sudation réel n’est pas renseigné.
                </p>

                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Ces valeurs ne constituent pas des normes
                  universelles. Elles servent de points de
                  départ et doivent être ajustées selon
                  l’évolution individuelle, la charge
                  d’entraînement, les conditions climatiques et
                  les mesures réellement observées.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm leading-relaxed text-slate-500">
            Alimelys fournit des estimations et ne remplace ni
            une mesure de la dépense énergétique par
            calorimétrie indirecte, ni une évaluation
            nutritionnelle individualisée.
          </p>
        </div>
      </div>
    </section>
  );
}

function GroupeSources({ groupe }) {
  const Icone = groupe.icone;

  const styles = {
    orange: {
      conteneur: "border-orange-200 bg-orange-50",
      icone: "bg-orange-100 text-orange-700",
      titre: "text-orange-900",
    },
    blue: {
      conteneur: "border-blue-200 bg-blue-50",
      icone: "bg-blue-100 text-blue-700",
      titre: "text-blue-900",
    },
    cyan: {
      conteneur: "border-cyan-200 bg-cyan-50",
      icone: "bg-cyan-100 text-cyan-700",
      titre: "text-cyan-900",
    },
    green: {
      conteneur: "border-green-200 bg-green-50",
      icone: "bg-green-100 text-green-700",
      titre: "text-green-900",
    },
  };

  const style = styles[groupe.couleur];

  return (
    <div
      className={`rounded-3xl border p-5 md:p-6 ${style.conteneur}`}
    >
      <div className="mb-5 flex items-center gap-3">
        <div
          className={`rounded-xl p-2.5 ${style.icone}`}
        >
          <Icone size={23} />
        </div>

        <h3
          className={`text-xl font-extrabold ${style.titre}`}
        >
          {groupe.titre}
        </h3>
      </div>

      <div className="space-y-4">
        {groupe.sources.map((source) => (
          <Source
            key={`${source.auteurs}-${source.annee}`}
            source={source}
          />
        ))}
      </div>
    </div>
  );
}

function Source({ source }) {
  return (
    <article className="rounded-2xl border border-white bg-white p-5 shadow-sm">
      <p className="text-sm font-bold text-slate-800">
        {source.auteurs} ({source.annee})
      </p>

      <p className="mt-2 font-semibold leading-relaxed text-slate-700">
        {source.titre}
      </p>

      <p className="mt-1 text-sm italic text-slate-500">
        {source.revue}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        <strong className="text-slate-700">
          Utilisation dans Alimelys :
        </strong>{" "}
        {source.utilisation}
      </p>

      <a
        href={source.lien}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-blue-700 transition hover:border-blue-200 hover:bg-blue-50"
      >
        Consulter la publication
        <ExternalLink size={16} />
      </a>
    </article>
  );
}

export default SourcesScientifiques;