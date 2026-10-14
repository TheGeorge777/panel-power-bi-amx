/* Tarjetas de reportes */
(function (H) {
  var $ = H.$;
  var DECO = [
    '<svg class="deco" viewBox="0 0 300 180" preserveAspectRatio="none" fill="#fff"><rect x="10" y="90" width="26" height="90" rx="4"/><rect x="50" y="60" width="26" height="120" rx="4"/><rect x="90" y="75" width="26" height="105" rx="4"/><rect x="130" y="30" width="26" height="150" rx="4"/><rect x="170" y="80" width="26" height="100" rx="4"/><rect x="210" y="105" width="26" height="75" rx="4"/><rect x="250" y="45" width="26" height="135" rx="4"/><polyline points="0,120 60,85 120,110 180,55 240,95 300,40" fill="none" stroke="#fff" stroke-width="3" stroke-linejoin="round"/></svg>',
    '<svg class="deco" viewBox="0 0 300 180" preserveAspectRatio="none" fill="#fff"><rect x="10" y="40" width="26" height="140" rx="4"/><rect x="50" y="85" width="26" height="95" rx="4"/><rect x="90" y="55" width="26" height="125" rx="4"/><rect x="130" y="100" width="26" height="80" rx="4"/><rect x="170" y="20" width="26" height="160" rx="4"/><rect x="210" y="70" width="26" height="110" rx="4"/><rect x="250" y="90" width="26" height="90" rx="4"/><polyline points="0,60 60,110 120,70 180,120 240,50 300,85" fill="none" stroke="#fff" stroke-width="3" stroke-linejoin="round"/></svg>'
  ];

  function card(r, i) {
    return '<article class="card ' + r.cat.theme + '">' + DECO[i % 2] +
      '<span class="chip">' + H.esc(r.cat.name) + "</span>" +
      "<h3>" + H.esc(r.title) + "</h3><p>" + H.esc(r.desc) + "</p>" +
      '<div class="actions">' +
      '<button class="btn primary" data-open="' + r.id + '">' + H.icons.eye + "Ver reporte</button>" +
      '<a class="btn ghost" href="' + H.esc(r.url) + '" target="_blank" rel="noopener">' + H.icons.ext + "Pestaña nueva</a>" +
      "</div></article>";
  }

  H.renderCards = function () {
    var s = H.state, q = H.norm(s.query.trim());
    var list = H.allReports().filter(function (r) {
      return (s.cat === "all" || r.cat.slug === s.cat) && (!q || H.norm(r.title + " " + r.desc + " " + r.cat.name).indexOf(q) > -1);
    });
    $("count").textContent = list.length;
    $("empty").hidden = list.length > 0;
    var h = "";
    H.categories.forEach(function (c) {
      var items = list.filter(function (r) { return r.cat.slug === c.slug; });
      if (!items.length) return;
      var head = s.cat === "all" ? '<div class="group-head" style="--c:' + c.color + '"><span class="dot"></span><h2>' + H.esc(c.name) + '</h2><span class="line"></span><span class="cnt">' + items.length + "</span></div>" : "";
      h += '<div class="group">' + head + '<div class="grid">' + items.map(card).join("") + "</div></div>";
    });
    $("groups").innerHTML = h;
  };

  H.initCards = function () {
    $("groups").addEventListener("click", function (e) {
      var b = e.target.closest("[data-open]"); if (b) H.openViewer(b.dataset.open);
    });
  };
})(window.HITSS);
