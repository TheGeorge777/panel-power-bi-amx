/* Categoría: Calidad
   Para agregar un reporte: copia un bloque { title, desc, url } dentro de "reports". */
HITSS.categories.push({
  slug:  "calidad",
  name:  "Calidad",
  color: "#7C0613",   // punto de color en la barra lateral
  theme: "c-wine",                  // c-red | c-black | c-wine  (ver css/cards.css)
  reports: [
    {
      title: "MINIMESAS",
      desc:  "Trazabilidad visual.",
      url:   "https://app.powerbi.com/view?r=eyJrIjoiZjA1YTAxODEtMDMwMC00MjVlLTk0NWMtNTRlNGIxNWFhNDI2IiwidCI6IjVmZDU0NjBhLWI0MjUtNDlkZS05YmQwLWZjZDI2MjcwZDMwYyIsImMiOjR9"
    },
    {
      title: "BO FIJA",
      desc:  "Indicadores de gestión.",
      url:   "https://app.powerbi.com/view?r=eyJrIjoiYmNiNjFiZTktYmFiNS00YTZmLWJhNDktZDdiMDg0MDQ2M2NiIiwidCI6IjVmZDU0NjBhLWI0MjUtNDlkZS05YmQwLWZjZDI2MjcwZDMwYyIsImMiOjR9"
    },
    {
      title: "FALLAS",
      desc:  "Eficiencia operativa de incidencias.",
      url:   "https://app.powerbi.com/view?r=eyJrIjoiZjY4NzBkNjUtNGMzNS00YTQ3LWFkNzctNTE0NmU0YzA0YTMwIiwidCI6IjVmZDU0NjBhLWI0MjUtNDlkZS05YmQwLWZjZDI2MjcwZDMwYyIsImMiOjR9"
    },
    {
      title: "FORMACIÓN INICIAL",
      desc:  "Indicadores de rendimiento inicial.",
      url:   "https://app.powerbi.com/view?r=eyJrIjoiYzc4M2VmNWItNjY0My00ZWMyLWJkODAtNmIzYWFmNGQ3Nzg0IiwidCI6IjVmZDU0NjBhLWI0MjUtNDlkZS05YmQwLWZjZDI2MjcwZDMwYyIsImMiOjR9"
    }
  ]
});
