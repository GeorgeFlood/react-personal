// useOnScreen.js
import { useState, useEffect } from "react";

const useOnScreen = (ref, rootMargin = "0px") => {
  const [isIntersecting, setIntersecting] = useState(false);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!animationPlayed && entry.isIntersecting) {
          setIntersecting(true);
          setAnimationPlayed(true);
        }
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, rootMargin, animationPlayed]);

  return isIntersecting;
};

export default useOnScreen;
