import { gsap } from "gsap";

export const introAnimation = (wordGroupRef) => {
  const tl = gsap.timeline();

  tl.to(wordGroupRef.current, {
    yPercent: -80,
    duration: 5,
    ease: "power3.inOut",
  });

  return tl;
};

export const progerssAnimation = (progressRef, progressNumberRef) => {
  const tl = gsap.timeline();

  tl.to(progressRef.current, {
    scaleX: 1,
    duration: 5,
    ease: "power3.inOut",
  });

  return tl;
};
