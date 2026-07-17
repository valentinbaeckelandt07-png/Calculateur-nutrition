function APropos() {
  return (
    <section
      id="a-propos"
      className="mx-auto my-12 max-w-5xl scroll-mt-40 rounded-3xl bg-slate-900 p-6 text-white shadow-xl md:p-10"
    >
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-green-400">
            Le projet
          </p>

          <h2 className="text-3xl font-black">
            À propos d'Alimelys
          </h2>

          <p className="mt-4 leading-relaxed text-slate-300">
            Alimelys est un calculateur nutritionnel réalisé par Valentin Baeckelandt, stagiaire diététicien.
          </p>

          <p className="mt-4 leading-relaxed text-slate-300">
            Le site web propose une version destinée au grand public et une
            version Football offrant des recommandations adaptées aux
            exigences du football de haut niveau.
          </p>
        </div>

        <div className="rounded-2xl bg-white/10 p-6">
          <h3 className="text-lg font-extrabold">
            Les objectifs d'Alimelys
          </h3>

          <ul className="mt-4 space-y-3 text-slate-200">
            <li>✓ Simplifier le calcul des besoins énergétiques</li>
            <li>✓ Présenter des fourchettes plutôt que des valeurs rigides</li>
            <li>✓ Adapter les conseils au profil de l’utilisateur</li>
            <li>✓ Faciliter la compréhension des résultats</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default APropos;