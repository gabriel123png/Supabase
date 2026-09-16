import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";

// Vistas que SÍ existen
import Home from "./pages/Home";
import Areas from "./pages/areas/Areas";
import CrearArea from "./pages/areas/CrearArea";
import EditarArea from "./pages/areas/EditarArea";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* Áreas */}
          <Route path="areas" element={<Areas />} />
          <Route path="areas/crear" element={<CrearArea />} />
          <Route path="areas/editar/:id" element={<EditarArea />} />

          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}