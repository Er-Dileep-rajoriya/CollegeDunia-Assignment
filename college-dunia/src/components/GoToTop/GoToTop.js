import { useEffect, useState } from "react";
import "./gotoTop.css";

function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });

  return (
    <>
      {isVisible && (
        <div onClick={scrollToTop} className="top-btn">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3838/3838680.png"
            alt="Top"
          />
        </div>
      )}
    </>
  );
}

export default GoToTop;
