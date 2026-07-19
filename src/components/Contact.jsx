import {
  Mail,
  MessageCircle,
  Building2,
  Handshake,
  ArrowUpRight,
} from "lucide-react";

const ADRESSE_CONTACT = "contact@alimelys.fr";

function Contact() {
  const objet = encodeURIComponent(
    "Prise de contact via Alimelys"
  );

  return (
    <section
      id="contact"
      className="mx-auto my-12 max-w-5xl scroll-mt-40"
    >
      <div className="overflow-hidden rounded-3xl border border-blue-200 bg-white shadow-xl">
        <div className="bg-gradient-to-br from-blue-700 to-slate-900 px-6 py-9 text-white md:px-10">
          <p className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-green-300">
            <MessageCircle size={18} />
            Échangeons
          </p>

          <h2 className="text-3xl font-black md:text-4xl">
            Contact professionnel
          </h2>

          <p className="mt-4 max-w-3xl leading-relaxed text-blue-100">
            Une question sur Alimelys, un projet lié à la nutrition ou au
            football, ou une proposition de partenariat ? Vous pouvez me
            contacter directement par e-mail.
          </p>
        </div>

        <div className="grid gap-6 p-6 md:grid-cols-3 md:p-10">
          <MotifContact
            icone={Mail}
            titre="Utilisateurs"
            texte="Questions concernant le fonctionnement du calculateur ou l’interprétation des estimations."
          />

          <MotifContact
            icone={Building2}
            titre="Clubs et structures"
            texte="Échanges autour de la nutrition, de l’hydratation et de l’accompagnement des sportifs."
          />

          <MotifContact
            icone={Handshake}
            titre="Partenariats"
            texte="Collaborations avec des marques ou projets cohérents avec les valeurs d’Alimelys."
          />
        </div>

        <div className="border-t border-slate-200 bg-slate-50 px-6 py-7 md:px-10">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <div>
              <p className="text-sm font-semibold text-slate-500">
                Adresse de contact
              </p>

              <a
                href={`mailto:${ADRESSE_CONTACT}?subject=${objet}`}
                className="mt-1 block text-lg font-extrabold text-slate-800 transition hover:text-blue-700"
              >
                {ADRESSE_CONTACT}
              </a>
            </div>

            <a
              href={`mailto:${ADRESSE_CONTACT}?subject=${objet}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg md:w-auto"
            >
              Envoyer un e-mail
              <ArrowUpRight size={19} />
            </a>
          </div>

          <p className="mt-5 text-center text-xs leading-relaxed text-slate-500 md:text-left">
            Les propositions de partenariat sont étudiées uniquement
            lorsqu’elles sont cohérentes avec l’identité, les valeurs et le
            contenu scientifique d’Alimelys.
          </p>
        </div>
      </div>
    </section>
  );
}

function MotifContact({
  icone: Icone,
  titre,
  texte,
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="inline-flex rounded-xl bg-blue-100 p-2.5 text-blue-700">
        <Icone size={22} />
      </div>

      <h3 className="mt-4 text-lg font-extrabold text-slate-800">
        {titre}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {texte}
      </p>
    </article>
  );
}

export default Contact;