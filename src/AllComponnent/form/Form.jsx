import React from "react";
import rend1 from "./rend-1.webp";
import rend2 from "./rend-2.webp";
import rend3 from "./rend-3.webp";
import rend4 from "./rend-4.webp";
import rend5 from "./rend-5.webp";
import rend6 from "./rend-6.webp";
function Form() {
  return (
    <div
      id="rendez-vous-section"
      className="max-w-7xl bg-white md:mx-auto rounded-2xl mx-5 md:rounded-[50px] mt-6 md:mt-10 pb-10 relative z-10"
    >
      <h2 className="text-3xl md:text-[50px] text-center roboto-bold py-10">
        Prendre un rendez-vous
      </h2>
      <div className="w-full mx-auto my-7 px-8 md:px-80 rounded-md z-30">
        <form className="z-30">
          <div>
            <label
              htmlFor="Nom"
              className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Votre Nom
            </label>
            <input
              type="text"
              name="Nom"
              id="Nom"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            />
          </div>

          <div>
            <label
              htmlFor="Email"
              className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Email
            </label>
            <input
              name="Email"
              id="Email"
              placeholder="example@email.com"
              type="email"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            />
          </div>

          <div>
            <label
              htmlFor="Numero"
              className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Numéro de téléphone
            </label>
            <input
              name="Numero"
              id="Numero"
              placeholder="+2120711223344"
              type="tel"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            />
          </div>

          <div>
            <label
              htmlFor="Date"
              className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Date de rendez-vous
            </label>
            <input
              name="Date"
              id="Date"
              type="datetime-local"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            />
          </div>

          <button className="bg-[#00e1b7] px-4 py-2 mt-5 rounded-3xl border-none">
            Prendre un rendez-vous
          </button>
        </form>
      </div>
      <img
        src={rend1}
        alt="rend1"
        className="w-16 absolute -z-10 top-10 md:left-20"
      />
      <img
        src={rend2}
        alt="rend2"
        className="w-16 -z-10 absolute top-56 md:left-3"
      />
      <img
        src={rend3}
        alt="rend3"
        className="w-16 -z-10 absolute top-96 md:left-20"
      />
      <img
        src={rend4}
        alt="rend4"
        className="w-16 -z-10 absolute top-10 right-1 md:right-20"
      />
      <img
        src={rend5}
        alt="rend5"
        className="w-16 -z-10 absolute top-56 right-1 md:right-3"
      />
      <img
        src={rend6}
        alt="rend6"
        className="w-16 -z-10 absolute top-96 right-1 md:right-20"
      />
    </div>
  );
}

export default Form;
