/* Ventana flotante: se puede mover (arrastrando la barra negra), redimensionar (esquina inferior derecha),
   maximizar (botón o doble clic en la barra) y cerrar (botón o Esc). */
(function (H) {
  var $ = H.$, win, bar, frame, loader, maxBtn, saved = null;
  var MIN_W = 360, MIN_H = 260;
  var isMobile = function () { return window.matchMedia("(max-width:900px)").matches; };
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };

  function place(l, t, w, h) {
    win.style.left = l + "px"; win.style.top = t + "px";
    win.style.width = w + "px"; win.style.height = h + "px";
  }
  function centerDefault() {
    var w = Math.min(window.innerWidth - 80, 1100), h = Math.min(window.innerHeight - 80, 700);
    place(Math.round((window.innerWidth - w) / 2), Math.round((window.innerHeight - h) / 2), w, h);
  }
  function keepInside() {
    if (win.hidden || win.classList.contains("is-max")) return;
    var r = win.getBoundingClientRect();
    var w = Math.min(r.width, window.innerWidth), h = Math.min(r.height, window.innerHeight);
    place(clamp(r.left, 0, window.innerWidth - w), clamp(r.top, 0, window.innerHeight - 54), w, h);
  }

  function drag(e, onMove) {
    e.preventDefault();
    var el = e.currentTarget, id = e.pointerId;
    el.setPointerCapture(id);
    win.classList.add("is-busy");
    function move(ev) { onMove(ev); }
    function up() {
      el.releasePointerCapture(id);
      el.removeEventListener("pointermove", move); el.removeEventListener("pointerup", up); el.removeEventListener("pointercancel", up);
      win.classList.remove("is-busy", "is-dragging");
    }
    el.addEventListener("pointermove", move); el.addEventListener("pointerup", up); el.addEventListener("pointercancel", up);
  }

  function toggleMax() {
    var on = !win.classList.contains("is-max");
    if (on) { saved = win.getBoundingClientRect(); }
    win.classList.toggle("is-max", on);
    maxBtn.textContent = on ? "Restaurar" : "Maximizar";
    if (!on && saved) place(saved.left, saved.top, saved.width, saved.height);
  }

  H.openViewer = function (id) {
    var r = H.allReports().filter(function (x) { return x.id === id; })[0]; if (!r) return;
    $("vname").textContent = r.title;
    $("vnew").href = r.url;
    loader.classList.remove("hide");
    frame.src = r.url;
    if (win.hidden) { win.hidden = false; if (!win.style.width) centerDefault(); }
    document.title = "HITSS | " + r.title;
  };
  H.closeViewer = function () {
    win.hidden = true; frame.src = "about:blank"; document.title = H.config.pageTitle;
  };

  H.initViewer = function () {
    win = $("vwin"); bar = $("vbar"); frame = $("frame"); loader = $("loader"); maxBtn = $("vmax");

    bar.addEventListener("pointerdown", function (e) {
      if (e.target.closest(".vbtn") || isMobile() || win.classList.contains("is-max")) return;
      var r = win.getBoundingClientRect(), dx = e.clientX - r.left, dy = e.clientY - r.top;
      win.classList.add("is-dragging");
      drag(e, function (ev) {
        win.style.left = clamp(ev.clientX - dx, -r.width + 120, window.innerWidth - 120) + "px";
        win.style.top = clamp(ev.clientY - dy, 0, window.innerHeight - 54) + "px";
      });
    });
    $("vresize").addEventListener("pointerdown", function (e) {
      var r = win.getBoundingClientRect();
      drag(e, function (ev) {
        win.style.width = clamp(ev.clientX - r.left, MIN_W, window.innerWidth - r.left) + "px";
        win.style.height = clamp(ev.clientY - r.top, MIN_H, window.innerHeight - r.top) + "px";
      });
    });
    bar.addEventListener("dblclick", function (e) { if (!e.target.closest(".vbtn") && !isMobile()) toggleMax(); });
    maxBtn.addEventListener("click", toggleMax);
    $("vclose").addEventListener("click", H.closeViewer);
    frame.addEventListener("load", function () { if (frame.getAttribute("src") !== "about:blank") loader.classList.add("hide"); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !win.hidden) H.closeViewer(); });
    window.addEventListener("resize", keepInside);
  };
})(window.HITSS);
