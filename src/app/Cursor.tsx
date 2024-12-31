import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursorDot = document.querySelector("[data-cursor-dot]") as HTMLElement;
    const cursorOutline = document.querySelector("[data-cursor-outline]") as HTMLElement;
    const product = document.getElementById("productSection");
    const footer = document.querySelector("footer");
    const listItems = document.querySelectorAll("li");
    const imgs = document.querySelectorAll("img");

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

      const handleMouseEnter = () => {
        cursorDot.style.width = "12px";
        cursorDot.style.height = "12px";
        cursorDot.style.backgroundColor = "#3B82F6";
        cursorDot.style.transition = "0.2s";

        cursorOutline.style.width = "57px";
        cursorOutline.style.height = "57px";
        cursorOutline.style.borderColor = "#3B82F6";
        cursorOutline.style.transition = "0.2s";
      };

      const handleMouseLeave = () => {
        cursorDot.style.width = "8px";
        cursorDot.style.height = "8px";
        cursorDot.style.backgroundColor = "";
        cursorDot.style.transition = "";

        cursorOutline.style.width = "40px";
        cursorOutline.style.height = "40px";
        cursorOutline.style.borderColor = "";
        cursorOutline.style.transition = "";
      };

      const handleSectionMouseEnter = () => {
        cursorDot.style.backgroundColor = "white";
        cursorOutline.style.borderColor = "white";
      };

      const handleSectionMouseLeave = () => {
        cursorDot.style.backgroundColor = "";
        cursorOutline.style.borderColor = "";
      };


      listItems.forEach((li) => {
        li.addEventListener("mouseenter", handleMouseEnter);
        li.addEventListener("mouseleave", handleMouseLeave);
      });

      window.addEventListener("mousemove", handleMouseMove);

      if (product) {
        product.addEventListener("mouseenter", handleSectionMouseEnter);
        product.addEventListener("mouseleave", handleSectionMouseLeave);
      }

      if (footer) {
        footer.addEventListener("mouseenter", handleSectionMouseEnter);
        footer.addEventListener("mouseleave", handleSectionMouseLeave);
      }

      imgs.forEach((img) => {
        img.addEventListener("mouseenter", () => {
          img.style.height = "270px";
          img.style.transition = "1s";
        });
      })

      imgs.forEach((img) => {
        img.addEventListener("mouseleave", () => {
          img.style.height = "";
          img.style.transition = "1s";
        });
      })

      // Cleanup all event listeners
      return () => {
        listItems.forEach((li) => {
          li.removeEventListener("mouseenter", handleMouseEnter);
          li.removeEventListener("mouseleave", handleMouseLeave);
        });

        imgs.forEach((img) => {
          img.removeEventListener("mouseenter", ()=>{});
          img.removeEventListener("mouseleave", ()=>{});
        })

        window.removeEventListener("mousemove", handleMouseMove);

        if (product) {
          product.removeEventListener("mouseenter", handleSectionMouseEnter);
          product.removeEventListener("mouseleave", handleSectionMouseLeave);
        }

        if (footer) {
          footer.removeEventListener("mouseenter", handleSectionMouseEnter);
          footer.removeEventListener("mouseleave", handleSectionMouseLeave);
        }
      };
    }
  }, []);

  return null;
};

export default Cursor;
