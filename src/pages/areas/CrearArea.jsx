import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function CrearArea() {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/areas', formData);
      navigate('/areas');
    } catch (error) {
      console.error('Error al guardar área:', error);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h1>Registrar Área</h1>
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              name="nombre"
              className="form-control"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Descripción</label>
            <textarea
              name="descripcion"
              className="form-control"
              rows="4"
              value={formData.descripcion}
              onChange={handleChange}
            ></textarea>
          </div>

          <Link to="/areas" className="btn btn-secondary me-2">
            Cancelar
          </Link>

          <button type="submit" className="btn btn-success">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
}