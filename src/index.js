import { PageFlip } from "page-flip";

document.addEventListener("DOMContentLoaded", function () {
  const pageFlip = new PageFlip(document.getElementById("book"), {
    width: 384, // base page width
    height: 448, // base page height

    size: "stretch",
    // set threshold values:
    minWidth: 384,
    maxWidth: 1000,
    minHeight: 448,
    maxHeight: 1000,

    maxShadowOpacity: 0.5, // Half shadow intensity
    showCover: true,
    mobileScrollSupport: false, // disable content scrolling on mobile devices
  });

  const docWidth = document.getElementById("book").offsetWidth;
  [].forEach.call(document.querySelectorAll("*"), function (el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  });

  window.addEventListener("resize", function (event) {
    console.log("kuku", window.innerWidth);

    if (window.innerWidth <= 480) {
      pageFlip.update({ mode: "portrait" });
    }
  });

  pageFlip.loadFromHTML(document.querySelectorAll(".page"));

  document.querySelector(".page-total").innerText = pageFlip.getPageCount();

  document.querySelector(".btn-prev").addEventListener("click", () => {
    pageFlip.flipPrev();
  });

  document.querySelector(".btn-next").addEventListener("click", () => {
    pageFlip.flipNext();
  });

  pageFlip.on("flip", (e) => {
    document.querySelector(".page-current").innerText = e.data + 1;
  });
});
