function Methodologie({ profil }) {
  const football = profil === "football";

  return (
    <section
      id="methodologie"
      className="mx-auto mt-12 max-w-5xl scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg md:p-10"
    >
      <div className="mb-8 text-center">
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-blue-600">
          Comprendre les résultats
        </p>

        <h2 className="text-3xl font-black text-slate-900">
          Méthodologie
        </h2>

        <p className="mx-auto mt-3 max-w-3xl leading-relaxed text-slate-600">
          Alimelys estime les besoins énergétiques quotidiens à partir des
          informations renseignées, puis adapte la répartition des
          macronutriments au profil sélectionné.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <article className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <p className="mb-2 text-sm font-extrabold uppercase tracking-wide text-blue-600">
            Étape 1
          </p>

          <h3 className="mb-3 text-xl font-extrabold text-slate-900">
            Métabolisme de base
          </h3>

          <p className="leading-relaxed text-slate-600">
            Le métabolisme de base correspond à l’énergie minimale utilisée
            quotidiennement par l’organisme pour assurer ses fonctions
            vitales. Il est estimé à partir du sexe, de l’âge, du poids et de
            la taille.
          </p>
        </article>

        <article className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <p className="mb-2 text-sm font-extrabold uppercase tracking-wide text-blue-600">
            Étape 2
          </p>

          <h3 className="mb-3 text-xl font-extrabold text-slate-900">
            Dépense énergétique quotidienne
          </h3>

          <p className="leading-relaxed text-slate-600">
            Le métabolisme de base est multiplié par un coefficient
            correspondant au niveau d’activité physique afin d’estimer la
            dépense énergétique quotidienne.
          </p>
        </article>

        <article className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <p className="mb-2 text-sm font-extrabold uppercase tracking-wide text-blue-600">
            Étape 3
          </p>

          <h3 className="mb-3 text-xl font-extrabold text-slate-900">
            Adaptation à l’objectif
          </h3>

          <p className="leading-relaxed text-slate-600">
            Les besoins énergétiques sont ensuite adaptés selon l’objectif
            sélectionné : maintien du poids, perte progressive de masse grasse
            ou prise de masse musculaire.
          </p>
        </article>

        {football ? (
          <article className="rounded-2xl border border-green-200 bg-green-50 p-6">
            <p className="mb-2 text-sm font-extrabold uppercase tracking-wide text-green-600">
              Étape 4 — Profil Football
            </p>

            <h3 className="mb-3 text-xl font-extrabold text-slate-900">
              Macronutriments adaptés au football
            </h3>

            <p className="leading-relaxed text-slate-600">
              
            </p>

            <p className="mt-3 leading-relaxed text-slate-600">
              Protéines : 1,6 à 2g par kg de poids corporel. Lipides : 20 à 30% de l'apport énergétique total. Glucides : complément énergétique de la ration. La répartition des macronutriments est adaptée aux exigences du
              football de haut niveau. Les protéines participent à la
              récupération et au maintien de la masse musculaire. Les lipides contribuent au fonctionnement hormonal et à la santé
              générale. Les glucides occupent une place centrale afin de
              soutenir les entraînements, les matchs et la récupération.
            </p>
          </article>
        ) : (
          <article className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <p className="mb-2 text-sm font-extrabold uppercase tracking-wide text-blue-600">
              Étape 4 — Profil Grand public
            </p>

            <h3 className="mb-3 text-xl font-extrabold text-slate-900">
              Répartition équilibrée des macronutriments
            </h3>

            <p className="leading-relaxed text-slate-600">
              
            </p>

            <p className="mt-3 leading-relaxed text-slate-600">
              Les protéines sont proposées entre 1,4 et 2 grammes par
              kilogramme de poids corporel. Les lipides représentent entre 25 et 35 % de l’apport
              énergétique total. Les glucides fournissent le complément
              nécessaire pour atteindre les besoins énergétiques estimés.
            </p>
          </article>
        )}
      </div>

      {football ? (
        <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">
          <p className="mb-2 text-sm font-extrabold uppercase tracking-wide text-green-600">
            Profil Football
          </p>

          <h3 className="mb-3 text-xl font-extrabold text-slate-900">
            Des besoins variables selon la charge sportive
          </h3>

          <p className="leading-relaxed text-slate-600">
            Les besoins nutritionnels d’un footballeur ne sont pas identiques
            chaque jour. Ils peuvent évoluer selon la durée et l’intensité des
            entraînements, les jours de repos, les doubles séances et les jours
            de match.
          </p>

          <p className="mt-3 leading-relaxed text-slate-600">
            Les fourchettes proposées par Alimelys constituent donc une base à
            adapter au calendrier sportif, à la récupération, aux sensations
            du joueur et à l’évolution de ses performances.
          </p>
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <p className="mb-2 text-sm font-extrabold uppercase tracking-wide text-blue-600">
            Profil Grand public
          </p>

          <h3 className="mb-3 text-xl font-extrabold text-slate-900">
            Des repères souples à adapter au quotidien
          </h3>

          <p className="leading-relaxed text-slate-600">
            Alimelys présente des fourchettes plutôt que des valeurs strictes
            afin de tenir compte des différences entre les individus.
          </p>

          <p className="mt-3 leading-relaxed text-slate-600">
            Les besoins réels peuvent varier selon le mode de vie, la
            composition corporelle, le niveau d’activité physique, les
            habitudes alimentaires et l’évolution du poids. Les individus exerçant une activité sportive peuvent plus ou moins se rapprocher de la fourchette haute des protéines, selon le type d'effort effectué.
          </p>
        </div>
      )}
    </section>
  );
}

export default Methodologie;