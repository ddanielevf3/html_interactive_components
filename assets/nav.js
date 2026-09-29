document.addEventListener("click", function (e) {
  document.querySelectorAll(".nav-dropdown[open], .mobile-menu[open]").forEach(function (d) {
    if (!d.contains(e.target)) d.removeAttribute("open");
  });
});

document.querySelectorAll(".mobile-menu a, .nav-dropdown a").forEach(function (a) {
  a.addEventListener("click", function () {
    var d = a.closest(".nav-dropdown, .mobile-menu");
    if (d) d.removeAttribute("open");
  });
});

document.querySelectorAll(".nav-dropdown").forEach(function (d) {
  var summary = d.querySelector("summary");
  var panel = d.querySelector(".dropdown-panel");
  if (!summary || !panel) return;
  d.addEventListener("toggle", function () {
    if (!d.open) return;
    var r = summary.getBoundingClientRect();
    panel.style.position = "fixed";
    panel.style.top = (r.bottom + 8) + "px";
    panel.style.left = "auto";
    panel.style.right = Math.max(16, window.innerWidth - r.right) + "px";
  });
});

window.addEventListener("resize", function () {
  document.querySelectorAll(".nav-dropdown[open], .mobile-menu[open]").forEach(function (d) {
    d.removeAttribute("open");
  });
});
