import { PageFlip } from "page-flip";

document.addEventListener("DOMContentLoaded", function () {
  const pageFlip = new PageFlip(document.getElementById("book"), {
    width: 550,
    height: 640,

    size: "stretch",
    minWidth: 315,
    maxWidth: 550,
    minHeight: 420,
    maxHeight: 640,

    maxShadowOpacity: 0.5,
    showCover: true,
    mobileScrollSupport: false,
  });

  const docWidth = document.getElementById("book").offsetWidth;
  [].forEach.call(document.querySelectorAll("*"), function (el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
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
