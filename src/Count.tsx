import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Counter = ({ end = 8, duration = 3 }) => {
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const counterObj = { val: 0 };
    gsap.to(counterObj, {
      val: end,
      duration: duration,
      ease: "power3.out", // sekin oxirlab boradi
      onUpdate: () => {
        if (numberRef.current) {
          numberRef.current.textContent = Math.floor(counterObj.val).toString();
        }
      },
    });
  }, [end, duration]);

  return <span ref={numberRef}>0</span>;
};

export default Counter;
