import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pro3 from "./pro-3.webp";
import pro4 from "./pro-4.webp";
import pro5 from "./pro-5.webp";
import pro1 from "./pro-1.webp";

function About() {
  gsap.registerPlugin(ScrollTrigger);
  let imageContainer = useRef(null);

  useEffect(() => {
    let myimages1 = gsap.utils.toArray(".myimages1");

    gsap.to(myimages1, {
      xPercent: -100 * (myimages1.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: imageContainer.current,
        scrub: 1,
        end: () => "+=" + imageContainer.current.offsetWidth,
        pin: true,
        snap: 1 / (myimages1.length - 1),
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div id="cabinet-section" className="max-w-7xl bg-white md:mx-auto rounded-2xl mx-5 md:rounded-[50px] mt-20 pb-10 overflow-hidden">
      <h2 className="text-3xl md:text-[50px] text-center md:px-40 roboto-bold py-10">
        Notre cabinet
      </h2>
      <p className="px-9 md:px-20 text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
        eligendi commodi necessitatibus, nemo doloremque in blanditiis
        laudantium dignissimos sint iusto eaque!
      </p>
      <main className="w-full overflow-x-hidden">
        <section
          ref={imageContainer}
          className="h-screen flex flex-nowrap items-center md:space-x-10 md:px-20 imageContainer border overflow-hidden"
          style={{ width: "calc(100vh * 4)" }}
        >
          <div className="w-[60vh] md:w-[100vh] shrink-0 overflow-hidden myimages1 border">
            <img src={pro1} className="w-full rounded-3xl" alt="pro1" />
          </div>
          <div className="w-[60vh] md:w-[100vh] shrink-0 overflow-hidden myimages1 flex justify-center">
            <img src={pro5} className="w-1/2 rounded-3xl" alt="pro5" />
          </div>
          <div className="w-[60vh] md:w-[100vh] shrink-0 rounded-3xl overflow-hidden myimages1 flex justify-center">
            <img src={pro3} className="w-1/2 rounded-3xl" alt="pro3" />
          </div>
          <div className="w-[60vh] md:w-[100vh] shrink-0 rounded-3xl overflow-hidden myimages1 flex justify-center">
            <img src={pro4} className="w-1/2 rounded-3xl" alt="pro4" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;

{
  /* <div  className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-4">
        <div className="flex flex-col items-center gap-3">
          <img src={pro3} className="w-3/4 rounded-xl" alt="pro3" loading="lazy" />
          <img src={pro4} className="w-3/4 rounded-xl" alt="pro3" loading="lazy" />
        </div>
        <div className="flex flex-col items-center gap-3">
          <img src={pro5} className="w-3/4 rounded-xl" alt="pro3" loading="lazy" />
          <img src={pro1} className="w-3/4 rounded-xl" alt="pro3" loading="lazy" />
        </div>
      </div> */
}
