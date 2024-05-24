import React from "react";

function Maps() {
  return (
    <div id="lieu-horaire-section" className="max-w-7xl md:mx-auto mx-5 mt-6 md:mt-10 pb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h3 className="text-3xl text-center roboto-bold py-5">
          Horaire d'ouverture
        </h3>
        <div className="py-7 sm:px-3">
          <table className="greenTable bg-white rounded-md overflow-hidden shadow">
            <thead className="bg-[#002334] text-gray-200">
              <tr className="">
                <th></th>
                <th colSpan="2" className="">
                  Matin
                </th>
                <th colSpan="2" className="">
                  Soir
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lundi</td>
                <td>8:30</td>
                <td>14:00</td>
                <td>16:00</td>
                <td>18:30</td>
              </tr>
              <tr className="bg-[#3d3d3d4b]">
                <td>mardi</td>
                <td>8:30</td>
                <td>14:00</td>
                <td>16:00</td>
                <td>18:30</td>
              </tr>
              <tr>
                <td>mercredi</td>
                <td>8:30</td>
                <td>14:00</td>
                <td>16:00</td>
                <td>18:30</td>
              </tr>
              <tr className="bg-[#3d3d3d4b]">
                <td>jeudi</td>
                <td>8:30</td>
                <td>14:00</td>
                <td>16:00</td>
                <td>18:30</td>
              </tr>
              <tr>
                <td>vendredi</td>
                <td>8:30</td>
                <td>14:00</td>
                <td>16:00</td>
                <td>18:30</td>
              </tr>
              <tr className="bg-[#3d3d3d4b]">
                <td>samedi</td>
                <td colSpan="4">Sur rendez-vous</td>
              </tr>
              <tr>
                <td>dimanche</td>
                <td colSpan="4">Fermé</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h3 className="text-3xl text-center roboto-bold py-5">
          Lieu de cabinet
        </h3>
        <div className="w-full h-full py-7 sm:px-3 max-h-[430px] min-h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55456.302215191696!2d-9.770009955260381!3d29.690232049988534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb479f80a0432e5%3A0x4de7b30202dab839!2sTiznit%2085000!5e0!3m2!1sfr!2sma!4v1715080022303!5m2!1sfr!2sma"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Maps;
