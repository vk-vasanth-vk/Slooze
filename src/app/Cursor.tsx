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

      const listItems = document.querySelectorAll('li');

      listItems.forEach((li) => {
        li.addEventListener("mouseenter", () => {
          cursorDot.style.width = "12px";
          cursorDot.style.height = "12px";

          cursorOutline.style.width = "57px";
          cursorOutline.style.height = "57px";
      
        })

        li.addEventListener("mouseleave", () => {
          cursorDot.style.width = "8px";
          cursorDot.style.height = "8px";

          cursorOutline.style.width = "40px";
          cursorOutline.style.height = "40px";
        })
      })

    }

    return () => {
      // Cleanup the event listeners
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  return null;
};

export default Cursor;
