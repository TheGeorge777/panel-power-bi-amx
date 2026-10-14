/* Barra lateral: categorías, buscador y botón ocultar/mostrar */
(function (H) {
  var $ = H.$;

  H.renderCats = function () {
    var all = H.allReports().length, s = H.state;
    var h = '<button class="cat all ' + (s.cat === "all" ? "active" : "") + '" data-cat="all">Todos<span class="n">' + all + "</span></button>";
    H.categories.forEach(function (c) {
      h += '<button class="cat ' + (s.cat === c.slug ? "active" : "") + '" data-cat="' + c.slug + '" style="--c:' + c.color + '"><span class="dot"></span>' + H.esc(c.name) + '<span class="n">' + c.reports.length + "</span></button>";
    });
    $("cats").innerHTML = h;
    var cur = H.categories.filter(function (c) { return c.slug === s.cat; })[0];
    $("crumb").textContent = cur ? cur.name : "Todos los reportes";
  };

  H.initSidebar = function (onChange) {
    $("cats").addEventListener("click", function (e) {
      var b = e.target.closest("[data-cat]"); if (!b) return;
      H.state.cat = b.dataset.cat; onChange(); $("main").scrollTo({ top: 0 });
    });
    $("q").addEventListener("input", function (e) { H.state.query = e.target.value; onChange(); });

    // Ocultar / mostrar el menú (se recuerda la elección)
    var app = $("app"), btn = $("sidebarToggle");
    function set(collapsed) {
      app.classList.toggle("is-collapsed", collapsed);
      btn.setAttribute("aria-expanded", String(!collapsed));
      H.store.set("hitss.sidebar", collapsed ? "closed" : "open");
    }
    btn.addEventListener("click", function () { set(!app.classList.contains("is-collapsed")); });
    if (H.store.get("hitss.sidebar") === "closed") set(true);
  };
})(window.HITSS);
