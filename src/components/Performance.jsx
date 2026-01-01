import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { performanceImages, performanceImgPositions } from "../constants";

const Performance = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // Text animation
      gsap.fromTo(".content p", 
        {opacity: 0,y: 10}, 
      {
        opacity: 1, 
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.content p',
          start: 'top bottom',
          end: 'top center',
          scrub: true,
          invalidateOnRefresh: true,
        }
      });

      // Image animation
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1025px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        });

        performanceImgPositions.forEach(({ id, left, right, bottom, transform }) => {
          if (id === "p5") return;

          tl.to(
            `.${id}`,
            {
              left: left !== undefined ? `${left}%` : undefined,
              right: right !== undefined ? `${right}%` : undefined,
              bottom: bottom !== undefined ? `${bottom}%` : undefined,
              transform,
              ease: "power1.inOut",
            },
            0
          );
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="performance" ref={sectionRef}>
      <h2>Next-level performance. Game on.</h2>

      <div className="wrapper">
        {performanceImages.map(({ id, src }) => (
          <img key={id} src={src} alt={`Performance image ${id}`} className={id} />
        ))}
      </div>

      <div className="content">
        <p>
          Run graphics-intensive workflows with a responsiveness that keeps up
          with your imagination. The M4 family of chips features a GPU with a
          second-generation hardware-accelerated ray tracing engine that renders
          images faster,{" "}
          <span className="text-white">
            so gaming feels more immersive and realistic than ever.
          </span>{" "}
          And Dynamic Caching optimizes fast on-chip memory to dramatically
          increase average GPU utilization — driving a huge performance boost
          for the most demanding pro apps and games.
        </p>
      </div>
    </section>
  );
};

export default Performance;
