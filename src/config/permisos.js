// Un solo lugar para decidir qué rol ve qué página.
// Para dar o quitar acceso, solo edita la lista "roles" de cada ruta.
export const PAGINAS = [
  {
    ruta: "/",
    texto: "Inicio",
    roles: ["persona1", "persona2", "persona3"],
  },
  {
    ruta: "/pagina1",
    texto: "pagina1",
    roles: ["persona1", "persona2"],
  },
  {
    ruta: "/pagina2",
    texto: "pagina2",
    roles: ["persona1", "persona3"],
  },
  {
    ruta: "/pagina3",
    texto: "pagina3",
    roles: ["persona1"],
  },
];

export function puedeVer(rol, ruta) {
  const pagina = PAGINAS.find((p) => p.ruta === ruta);
  return pagina ? pagina.roles.includes(rol) : false;
}
