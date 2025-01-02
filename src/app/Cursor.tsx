import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursorDot = document.querySelector("[data-cursor-dot]") as HTMLElement;
    const cursorOutline = document.querySelector("[data-cursor-outline]") as HTMLElement;
    const productSection = document.querySelector(".productSection");
    const footer = document.querySelector("footer");
    const listItems = document.querySelectorAll("li");
    const imgs = document.querySelectorAll(".productSection img");
    const btns = document.querySelectorAll("button");

    const isCursorInSection = (cursorX: number, cursorY: number, section: Element | null) => {
      if (!section) return false;
      const rect = section.getBoundingClientRect();
      return (
        cursorX >= rect.left &&
        cursorX <= rect.right &&
        cursorY >= rect.top &&
        cursorY <= rect.bottom
      );
    };

    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorOutline.animate(
        { left: `${posX}px`, top: `${posY}px` },
        { duration: 500, fill: "forwards" }
      );

      if (isCursorInSection(posX, posY, productSection) || isCursorInSection(posX, posY, footer)) {
        cursorDot.style.backgroundColor = "white";
        cursorOutline.style.borderColor = "white";
      } else {
        cursorDot.style.backgroundColor = "black";
        cursorOutline.style.borderColor = "black";
      }
    };

    const handleMouseEnter = () => {
      cursorDot.style.width = "12px";
      cursorDot.style.height = "12px";
      cursorDot.style.transition = "0.2s";

      cursorOutline.style.width = "57px";
      cursorOutline.style.height = "57px";
      cursorOutline.style.transition = "0.2s";
    };

    const handleMouseLeave = () => {
      cursorDot.style.width = "8px";
      cursorDot.style.height = "8px";
      cursorDot.style.transition = "";
      cursorDot.style.backgroundColor = "black"; // Revert to original color

      cursorOutline.style.borderColor = "black"; // Revert outline to original color
      cursorOutline.style.width = "40px";
      cursorOutline.style.height = "40px";
      cursorOutline.style.transition = "";
    };

    const handleImageMouseEnter = (img: HTMLElement) => {
      img.style.height = "270px";
      img.style.transition = "1s";
    };

    const handleImageMouseLeave = (img: HTMLElement) => {
      img.style.height = "";
      img.style.transition = "1s";
    };

    listItems.forEach((li) => {
      li.addEventListener("mouseenter", handleMouseEnter);
      li.addEventListener("mouseleave", handleMouseLeave);
    });

    btns.forEach((btn) => {
      btn.addEventListener("mouseenter", handleMouseEnter);
      btn.addEventListener("mouseleave", handleMouseLeave);
    });

    imgs.forEach((img) => {
      img.addEventListener("mouseenter", () => handleImageMouseEnter(img));
      img.addEventListener("mouseleave", () => handleImageMouseLeave(img));
    });

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      listItems.forEach((li) => {
        li.removeEventListener("mouseenter", handleMouseEnter);
        li.removeEventListener("mouseleave", handleMouseLeave);
      });

      btns.forEach((btn) => {
        btn.removeEventListener("mouseenter", handleMouseEnter);
        btn.removeEventListener("mouseleave", handleMouseLeave);
      });

      imgs.forEach((img) => {
        img.removeEventListener("mouseenter", () => handleImageMouseEnter(img));
        img.removeEventListener("mouseleave", () => handleImageMouseLeave(img));
      });

      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
};

export default Cursor;
