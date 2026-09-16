import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';


export default function EditarArea() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
  });

  useEffect(() => {
    const fetchArea = async () => {
      try {
        const response = await api.get(`/areas/${id}`);
        setFormData({
          nombre: response.data.nombre || '',
          descripcion: response.data.descripcion || '',
        });
      } catch (error) {
        console.error('Error al obtener área:', error);
      }
    };

    fetchArea();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/areas/${id}`, formData);
      navigate('/areas');
    } catch (error) {
      console.error('Error al actualizar área:', error);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h1>Editar Área</h1>
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

          <button type="submit" className="btn btn-warning">
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
}