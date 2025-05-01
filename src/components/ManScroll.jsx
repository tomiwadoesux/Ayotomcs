import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function ManScroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const man = document.querySelector('#man');
    if (!man) {
      console.error('Element #man not found');
      return;
    }

    gsap.to(man, {
      y: 400,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        markers: false
      }
    });
  }, []);


}
