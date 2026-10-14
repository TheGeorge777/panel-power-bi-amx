/* Arranque de la aplicación */
(function (H) {
  var $ = H.$, c = H.config;
  $("brandName").textContent = c.brandName;
  $("brandSub").textContent = c.brandSub;
  $("heroTitle").innerHTML = c.heroTitle;
  $("heroLead").textContent = c.heroLead;
  $("footNote").textContent = c.footNote;
  $("footAuthor").textContent = c.footAuthor;
  document.title = c.pageTitle;

  function refresh() { H.renderCats(); H.renderCards(); }
  H.initSidebar(refresh);
  H.initCards();
  H.initViewer();
  refresh();
})(window.HITSS);
