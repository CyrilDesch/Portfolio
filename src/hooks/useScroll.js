import { useState, useEffect } from "react";

export default function useScroll() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const listener = e => {
      if(window.pageYOffset * window.screen.width / window.innerWidth < 60)
        setScrolled(false);
      else if (!scrolled)
        setScrolled(true);
    };

    window.addEventListener("scroll", listener, { passive: true});
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return scrolled;
}