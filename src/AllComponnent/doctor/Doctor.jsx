import React from "react";
import doctor from "./th-his-arms-crossed-white-background.webp";

function Doctor() {
  return (
    <div id="medecin-section" className="max-w-7xl bg-white md:mx-auto rounded-2xl mx-5 md:rounded-[50px] mt-6 md:mt-10 pb-10">
      <h2 className="text-3xl md:text-[50px] text-center md:px-40 roboto-bold py-10">
        À propos du Dr [Nom]
      </h2>
      <div className="md:flex md:flex-row-reverse">
        <div className="grow md:w-1/2 flex items-center roboto-light text-center md:text-left py-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          reiciendis animi aliquam nihil aliquid nostrum facilis deserunt iusto,
          tenetur neque veritatis et tempora, ipsum illum saepe id, distinctio
          nobis explicabo.
        </div>
        <div className="grow flex justify-center md:w-1/2">
          <img src={doctor} alt="doctor" className="w-1/2" />
        </div>
      </div>
    </div>
  );
}

export default Doctor;
