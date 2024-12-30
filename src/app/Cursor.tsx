import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursorDot = document.querySelector("[data-cursor-dot]") as HTMLElement;
    const cursorOutline = document.querySelector("[data-cursor-outline]") as HTMLElement;

    if (cursorDot && cursorOutline) {
      window.addEventListener("mousemove", (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Update cursor dot position
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Animate cursor outline position
        cursorOutline.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          { duration: 500, fill: "forwards" }
        );
      });

      // Hover effect for <li> elements
      const listItems = document.querySelectorAll("li");
      listItems.forEach((li) => {
        li.addEventListener("mouseenter", () => {
          cursorDot.style.transform = "scale(1.5)"; // Increase size of the dot
          cursorOutline.style.transform = "scale(2)"; // Increase size of the outline
        });

        li.addEventListener("mouseleave", () => {
          cursorDot.style.transform = "scale(1)"; // Reset size of the dot
          cursorOutline.style.transform = "scale(1)"; // Reset size of the outline
        });
      });
    }

    return () => {
      // Cleanup the event listeners
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  return null;
};

export default Cursor;
