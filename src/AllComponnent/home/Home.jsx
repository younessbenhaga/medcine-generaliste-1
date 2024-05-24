import React, { useEffect } from "react";
import star from "./stars-star-svgrepo-com.svg";
import image_1 from "./d73bfec1-4723-4fc4-b4ff-2eea3ff93e17.webp";
import image_2 from "./d19f2983-a19f-4cd6-97c3-cc838dd193cd.webp";
import image_3 from "./11f26e5f-083d-4106-a91b-8168081cad40.webp";
import image_4 from "./87fbbfbb-aec9-40d3-aff9-41ddb49a1728.webp";
import image_5 from "./286ebb4f-5020-4bcf-bb16-d420431f4369.webp";
import image_6 from "./8ce39cb8-4795-43e0-b677-61285f43c62b.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Home() {
  gsap.registerPlugin(ScrollTrigger);
  // let box = document.querySelectorAll(".box1");
  useEffect(() => {
    let boxs = gsap.utils.toArray(".box1");
    let box2 = gsap.utils.toArray(".box2");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#accueil-section",
        start: "20px 80%",
        onUpdate: (self) => {
          // Check the direction of the scroll
          if (self.direction === -1) {
            // If scrolling up
            gsap.to(boxs, { x: 0, duration: 2, rotate: 360 });
            gsap.to(box2, { x: 0, duration: 2, rotate: 360 });
          } else if (self.direction === 1) {
            // If scrolling down
            gsap.to(boxs, { x: -200, duration: 2, rotate: 360 });
            gsap.to(box2, { x: 200, duration: 2, rotate: 360 });
          }
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      id="accueil-section"
      className="pt-[90px] md:pt-[172px] overflow-hidden md:h-screen relative"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-center bg-gree">
          <img src={star} alt="star" className="w-8" />
          <img src={star} alt="star" className="w-8" />
          <img src={star} alt="star" className="w-8" />
          <img src={star} alt="star" className="w-8" />
          <img src={star} alt="star" className="w-8" />
        </div>
        <h1 className="text-[40px] md:text-[80px] text-center md:px-40 md:tracking-tight md:leading-[96px] roboto-black mt-8">
          Bienvenue Cher <br /> Dr [nom complet]
        </h1>
        <p className="mt-5 md:mt-2 text-lg px-3 md:px-40 text-center roboto-light">
          Votre medcin de confience,Votre medcin de confience,Votre medcin de
          confience
        </p>
        <div className="flex justify-center mt-9 md:mt-12">
          <button className="p-3 md:p-5 text-xl rounded-[50px] bg-[#00e1b7] roboto-bold">
            Prendre un rendez-vous
          </button>
        </div>
      </div>
      <img
        src={image_1}
        className="w-16 absolute top-[100px] left-5 md:left-64 -z-10 box1"
        alt="image_1"
      />
      <img
        src={image_2}
        className="w-16 absolute top-[300px] left-10 -z-10 box1"
        alt="image_1"
      />
      <img
        src={image_3}
        className="w-20 absolute top-[500px] left-64 -z-10 box1"
        alt="image_1"
      />
      <img
        src={image_4}
        className="w-24 absolute top-[100px] right-5 md:right-64 -z-10 box2"
        alt="image_1"
      />
      <img
        src={image_5}
        className="w-16 absolute top-[500px] right-64 -z-10 box2"
        alt="image_1"
      />
      <img
        src={image_6}
        className="w-16 absolute top-[300px] right-10 -z-10 box2"
        alt="image_1"
      />
    </div>
  );
}

export default Home;
