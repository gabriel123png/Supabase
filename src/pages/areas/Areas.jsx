import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Areas.css';


export default function Areas() {
  const [areas, setAreas] = useState([]);
  const [mensaje, setMensaje] = useState('');

  const fetchAreas = async () => {
    try {
      const response = await api.get('/areas');
      setAreas(response.data);
    } catch (error) {
      console.error('Error al obtener áreas:', error);
    }
  };

  useEffect(() => {
    fetchAreas();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('¿Desea eliminar esta área?')) {
      try {
        await api.delete(`/areas/${id}`);
        setMensaje('Área eliminada correctamente.');
        fetchAreas();
      } catch (error) {
        console.error('Error al eliminar:', error);
      }
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Áreas</h1>
        <Link to="/areas/crear" className="btn btn-success">
          Nueva Área
        </Link>
      </div>

      {mensaje && <div className="alert alert-success">{mensaje}</div>}

      <div className="card">
        <div className="card-body">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {areas.length > 0 ? (
                areas.map((area) => (
                  <tr key={area.id}>
                    <td>{area.id}</td>
                    <td>{area.nombre}</td>
                    <td>{area.descripcion}</td>
                    <td>
                      <Link
                        to={`/areas/editar/${area.id}`}
                        className="btn btn-warning btn-sm me-2"
                      >
                        Editar
                      </Link>
                      <button
                        onClick={() => handleDelete(area.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    No hay áreas registradas.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}