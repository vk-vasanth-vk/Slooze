import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursorDot = document.querySelector("[data-cursor-dot]") as HTMLElement;
    const cursorOutline = document.querySelector("[data-cursor-outline]") as HTMLElement;
    const product = document.getElementById("productSection");
    // const homeText = document.getElementById("home-text");

    if (cursorDot && cursorOutline) {
      const handleMouseMove = (e: MouseEvent) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate(
          { left: `${posX}px`, top: `${posY}px` },
          { duration: 500, fill: "forwards" }
        );
      };

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

      window.addEventListener("mousemove", handleMouseMove);

      if (product) {
        const handleProductMouseEnter = () => {
          cursorDot.style.backgroundColor = "white"; 
          cursorOutline.style.borderColor = "white"; 
        };

        const handleProductMouseLeave = () => {
          cursorDot.style.backgroundColor = ""; 
          cursorOutline.style.borderColor = ""; 
        };

        product.addEventListener("mouseenter", handleProductMouseEnter);
        product.addEventListener("mouseleave", handleProductMouseLeave);
        // homeText.addEventListener("mouseenter", handleProductMouseEnter);
        // homeText.addEventListener("mouseleave", handleProductMouseLeave);

        // Cleanup for product section event listeners
        return () => {
          product.removeEventListener("mouseenter", handleProductMouseEnter);
          product.removeEventListener("mouseleave", handleProductMouseLeave);
          // homeText.removeEventListener("mouseenter", handleProductMouseEnter);
          // homeText.removeEventListener("mouseleave", handleProductMouseLeave);
        };
      }

      // Cleanup for mouse move listener
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return null;
};

export default Cursor;
