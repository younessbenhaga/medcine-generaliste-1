import React from "react";
// import image1 from "./blood-drop-svgrepo-com.svg";
// import image2 from "./family-practice-svgrepo-com.svg";
// import image3 from "./nutrition-svgrepo-com.svg";
import valid from "./valid.svg";

function Services() {
  return (
    <div id="services-section" className="max-w-7xl bg-white md:mx-auto rounded-2xl mx-5 md:rounded-[50px] mt-20 pb-10">
      <h2 className="text-3xl md:text-[50px] text-center md:px-40 roboto-bold py-10">
        Notre services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 px-3 gap-6">
        <div className="">
          <div className="grid grid-cols-10 gap-1 my-7 border rounded-3xl shadow p-2">
            <img src={valid} className="w-10" alt="blood" />
            <div className="col-span-9">
              <h4 className="font-bold text-lg">Médecine Générale</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita provident maiores iste et voluptatum quod quia, quaerat
                ab architecto obcaecati magnam dolores doloremque odio esse qui.
                Amet voluptatum minus fugiat.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-10 gap-1 my-7 border rounded-3xl shadow p-2">
            <img src={valid} className="w-10" alt="blood" />
            <div className="col-span-9">
              <h4 className="font-bold text-lg">Maladies chroniques</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis laudantium sed consequuntur quos, in tenetur numquam
                blanditiis vel error omnis commodi rerum cupiditate illo quam
                eum animi dignissimos exercitationem odit?
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-10 gap-1 md:my-7 border rounded-3xl shadow p-2">
            <img src={valid} className="w-10" alt="blood" />
            <div className="col-span-9">
              <h4 className="font-bold text-lg">Maladies auto-immunes</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate ea eveniet praesentium vitae, provident tempore. Fugit
                voluptate laboriosam nostrum laborum dolore iure aut, commodi a
                perspiciatis eligendi ex ipsum consequuntur.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-10 gap-1 my-7 border rounded-3xl shadow p-2">
            <img src={valid} className="w-10" alt="blood" />
            <div className="col-span-9">
              <h4 className="font-bold text-lg">
                L'obésite et programmes de perte du gras
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corporis repellendus sed deserunt ipsam quis magni qui ipsa,
                itaque consequuntur atque ratione eaque omnis nesciunt obcaecati
                quae voluptates ducimus dignissimos porro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
