const questions = [
  {
    question: "Les résultats d’Alimelys sont-ils exacts ?",
    reponse:
      "Alimelys fournit une estimation basée sur les informations renseignées. Les besoins réels peuvent varier selon le métabolisme, la composition corporelle, le mode de vie, l’activité physique et les habitudes alimentaires.",
  },
  {
    question: "À quelle fréquence faut-il refaire le calcul ?",
    reponse:
      "Il est conseillé de refaire une estimation lorsque votre poids, votre niveau d’activité physique ou votre objectif évolue de manière significative. Un nouveau calcul peut également être utile après plusieurs semaines afin de vérifier que les estimations restent cohérentes avec votre situation.",
  },
  {
    question: "Pourquoi Alimelys propose-t-il des fourchettes ?",
    reponse:
      "Les besoins nutritionnels ne correspondent pas toujours à une valeur unique. Les fourchettes permettent d’adapter les apports à la faim, aux préférences alimentaires, à l’activité physique, à la récupération et à l’évolution des résultats.",
  },
  {
    question: "Que faire si mon poids n’évolue pas comme prévu ?",
    reponse:
      "Les résultats constituent un point de départ. Il peut être nécessaire d’ajuster progressivement les apports selon l’évolution du poids, les sensations, la faim, la récupération et les performances. Une évolution doit être observée sur plusieurs semaines plutôt que sur quelques jours.",
  },
  {
    question: "Quelle version choisir entre Grand public et Football ?",
    reponse:
      "La version Grand public convient aux personnes souhaitant obtenir des repères nutritionnels adaptés à leur quotidien et à une activité physique classique. La version Football est destinée aux joueurs soumis à une charge importante d’entraînement et de compétition.",
  },
  {
    question:
      "En quoi les besoins d’un footballeur de haut niveau diffèrent-ils de ceux du grand public ?",
    reponse:
      "Le footballeur de haut niveau réalise des efforts répétés, intenses et variables selon les jours. Ses besoins énergétiques, glucidiques, lipidiques et hydriques peuvent donc évoluer entre un jour de repos, une séance légère, une séance intense, une double séance ou un match. La nutrition doit également favoriser la récupération musculaire, la restauration des réserves énergétiques et le maintien des performances.",
  },
  {
    question: "Alimelys peut-il remplacer un suivi avec un diététicien ?",
    reponse:
      "Non. Alimelys fournit des repères indicatifs et ne remplace pas une évaluation personnalisée, notamment en cas de pathologie, de troubles du comportement alimentaire, de grossesse ou de croissance.",
  },
];

function FAQ() {
  return (
    <section
      id="faq"
      className="mx-auto my-12 max-w-5xl scroll-mt-40 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg md:p-10"
    >
      <div className="mb-8 text-center">
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-blue-600">
          Questions fréquentes
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-[#123A67]">
          Mieux utiliser Alimelys
        </h2>

        <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-slate-600">
          Retrouvez les réponses aux principales questions concernant les
          résultats et l’utilisation du calculateur.
        </p>
      </div>

      <div className="space-y-4">
        {questions.map((element) => (
          <details
            key={element.question}
            className="group rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 transition open:bg-white open:shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-800">
              <span>{element.question}</span>

              <span className="text-2xl font-light text-blue-600 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>

            <p className="mt-4 border-t border-slate-200 pt-4 leading-relaxed text-slate-600">
              {element.reponse}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default FAQ;