import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import RutaProtegida from "./components/RutaProtegida";
import Navbar from "./components/Navbar";

import Login from "./pages/Login/login";
import Inicio from "./pages/Inicio/Inicio";
import Pagina1 from "./pages/pagina1/Pagina1";
import Pagina2 from "./pages/pagina2/Pagina2";
import Pagina3 from "./pages/pagina3/Pagina3";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* Pública: no necesita sesión */}
          <Route path="/login" element={<Login />} />

          {/* Protegidas: sin sesión te manda a /login */}
          <Route element={<RutaProtegida />}>
            <Route
              element={
                <>
                  <Navbar />
                  <Outlet />
                </>
              }
            >
              <Route path="/" element={<Inicio />} />
              {/* Usando los componentes con mayúscula */}
              <Route path="/pagina1" element={<Pagina1 />} />
              <Route path="/pagina2" element={<Pagina2 />} />
              <Route path="/pagina3" element={<Pagina3 />} />
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;