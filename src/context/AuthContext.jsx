import { createContext, useContext, useState } from "react";

// "Base de datos" falsa: usuarios escritos directamente en el código.
const USUARIOS = [
  { usuario: "persona1", clave: "1234", rol: "persona1" },
  { usuario: "persona2", clave: "1234", rol: "persona2" },
  { usuario: "persona3", clave: "1234", rol: "persona3" },
];

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Si ya había sesión guardada en el navegador, la recupera al recargar
  const [sesion, setSesion] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("sesion"));
    } catch {
      return null;
    }
  });

  function login(usuario, clave) {
    const encontrado = USUARIOS.find(
      (u) => u.usuario === usuario && u.clave === clave
    );
    if (!encontrado) return false;

    const datos = { usuario: encontrado.usuario, rol: encontrado.rol };
    setSesion(datos);
    localStorage.setItem("sesion", JSON.stringify(datos));
    return true;
  }

  function logout() {
    setSesion(null);
    localStorage.removeItem("sesion");
  }

  return (
    <AuthContext.Provider value={{ sesion, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}
