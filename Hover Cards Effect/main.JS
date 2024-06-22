document.querySelectorAll(".list .item").forEach((item, index, items) => {
  item.addEventListener("mouseover", () => {
    items.forEach((el, idx) => {
      if (idx < index) {
        el.classList.add("before-hover");
      }
    });
  });
  item.addEventListener("mouseout", () => {
    items.forEach((el) => {
      el.classList.remove("before-hover");
    });
  });
});
