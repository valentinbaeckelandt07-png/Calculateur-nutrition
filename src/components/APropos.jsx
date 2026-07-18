function APropos() {
  return (
    <section
      id="a-propos"
      className="mx-auto my-12 max-w-5xl scroll-mt-40 rounded-3xl bg-slate-900 p-6 text-white shadow-xl md:p-10"
    >
      <div>
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-green-400">
          Le projet
        </p>

        <h2 className="text-3xl font-black">
          À propos d&apos;Alimelys
        </h2>

        <p className="mt-4 leading-relaxed text-slate-300">
          Alimelys est un calculateur nutritionnel réalisé par Valentin
          Baeckelandt, étudiant en diététique.
        </p>

        <p className="mt-4 leading-relaxed text-slate-300">
          Le site web propose une version destinée au grand public et une
          version Football offrant des recommandations adaptées aux exigences
          du football de haut niveau.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6">
          <h3 className="text-lg font-extrabold text-white">
            À l&apos;origine du projet
          </h3>

          <p className="mt-4 leading-relaxed text-slate-300">
            Ayant évolué en championnat national U17 et U19,
            j&apos;ai développé très tôt un intérêt pour la performance,
            l&apos;entraînement et la nutrition du footballeur.
          </p>

          <p className="mt-4 leading-relaxed text-slate-300">
            Mon expérience au sein d&apos;un centre de formation professionnel
            m&apos;a ensuite permis d&apos;approfondir les problématiques
            concrètes rencontrées par les jeunes joueurs : besoins
            énergétiques importants, récupération, hydratation, organisation des repas et
            adaptation à la charge d&apos;entraînement.
          </p>

          <p className="mt-4 leading-relaxed text-slate-300">
            J&apos;ai créé Alimelys afin de rendre les repères nutritionnels
            plus accessibles, tout en proposant une adaptation spécifique au
            football de haut niveau.
          </p>
        </div>

        <div className="rounded-2xl bg-white/10 p-6">
          <h3 className="text-lg font-extrabold">
            Les objectifs d&apos;Alimelys
          </h3>

          <ul className="mt-4 space-y-3 text-slate-200">
            <li>✓ Simplifier le calcul des besoins énergétiques</li>
<li>✓ Adapter les conseils au profil de l&apos;utilisateur</li>
            <li>
              ✓ Présenter des fourchettes plutôt que des valeurs rigides
            </li>

            <li>✓ Faciliter la compréhension des résultats</li>
<li>
              ✓ Rendre les références scientifiques accessibles et
              compréhensibles
            </li>
            <li>✓ Proposer une adaptation spécifique au football de haut niveau</li>

            <li>✓ Accompagner la performance et la récupération du footballeur</li>
            <li>✓ Aider chacun à atteindre ses objectifs physiques et à gagner en confiance</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default APropos;