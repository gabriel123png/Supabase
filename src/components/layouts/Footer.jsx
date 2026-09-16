import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row">
          {/* Información */}
          <div className="col-md-6 mb-3 mb-md-0">
            <h5>AdminSena</h5>
            <p className="text-white-50">
              Sistema de administración del SENA.
            </p>
          </div>

          {/* Enlaces */}
          <div className="col-md-6">
            <h5>Accesos rápidos</h5>
            <ul className="list-unstyled">
              <li className="mb-1">
                <Link to="/" className="text-white text-decoration-none">
                  Inicio
                </Link>
              </li>
              <li className="mb-1">
                <Link to="/areas" className="text-white text-decoration-none">
                  Áreas
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-3 border-secondary" />

        <div className="text-center">
          <p className="mb-0 text-white-50">
            © {currentYear} AdminSena
          </p>
        </div>
      </div>
    </footer>
  );
}