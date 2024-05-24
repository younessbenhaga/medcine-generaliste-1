import React from "react";

function Consultation() {
  return (
    <section className="overflow-x-hidden mt-10">
      <h2 className="text-xl text-center pt-3 pb-6 font-bold">
        Consultation en ligne
      </h2>
      <div className="px-6 text-3xl mystyle max-w-[970px] text-center mx-auto">
        <div className="">
          <span className="font-semibold"> Benhaga</span> vous offre des {" "}
          <sapn className="underline underline-offset-2">consultations</sapn>
          <span className="consul text-transparent ">Ben</span>à distance via
          <sapn className="what text-transparent ">what</sapn>
          whatsapp , avec des suivis régliers jusqu'à ce que vous atteignez vos
          objectifs. Si vous souhaitez une consultation à distance, prenez un
          rendez-vous sur le website ou appelez le{" "}
          <span className="phone text-transparent">pho</span>
          0762542198 ou cliquez directement sur le lien suivant :
          <a
            href="https://wa.me/2120762542198"
            target="_blank"
            className="hover:underline hover:underline-offset-8 text-green-800"
          >
            <span className="what text-transparent">what</span> Whatsapp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Consultation;
