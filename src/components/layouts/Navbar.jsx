import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  // Simulación de autenticación (sustituir con tu estado real/contexto)
  const user = JSON.parse(localStorage.getItem('user')) || {
    name: 'Usuario SENA',
    email: 'usuario@sena.edu.co',
    role: 'admin', // 'admin' o 'aprendiz'
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <>
      <style>{`
        :root {
          --sena-green: #39A900;
          --sena-dark: #1f1f1f;
          --sena-hover: #2f8d00;
        }

        .admin-navbar {
          background-color: var(--sena-green) !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
        }

        .admin-logo {
          width: 42px;
          height: 42px;
          object-fit: contain;
          background: white;
          border-radius: 6px;
          padding: 3px;
        }

        .admin-brand {
          font-size: 1.2rem;
          font-weight: 700;
          color: white !important;
          letter-spacing: .3px;
        }

        .admin-navbar .nav-link {
          color: rgba(255, 255, 255, .95) !important;
          padding: 10px 14px !important;
          border-radius: 6px;
          margin: 2px;
          transition: .2s ease;
        }

        .admin-navbar .nav-link:hover {
          background-color: rgba(0, 0, 0, .15);
          color: white !important;
        }

        .admin-toggler {
          border: 1px solid rgba(255, 255, 255, .6) !important;
          padding: 7px 10px;
          border-radius: 6px;
        }

        .admin-toggler:focus {
          box-shadow: none !important;
        }

        .admin-menu {
          margin-top: 10px;
          padding: 10px;
          background-color: #ffffff;
          border-radius: 10px;
          box-shadow: 0 5px 18px rgba(0, 0, 0, .18);
        }

        .admin-menu .nav-link {
          color: #333 !important;
          padding: 12px 14px !important;
          margin: 2px 0;
          border-radius: 7px;
        }

        .admin-menu .nav-link:hover {
          background-color: #f1f1f1;
          color: var(--sena-green) !important;
        }
      `}</style>

      <nav className="navbar navbar-expand-lg navbar-dark admin-navbar">
        <div className="container-fluid px-3 px-lg-4">
          {/* LOGO */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAM-jtaxKYljPzx7-TEn-u8MQWRjFmSUTMIrZAYLFB4ZfIHjBOlRQPlGA&s=10"
              alt="Logo SENA"
              className="admin-logo me-2"
            />
            <span className="admin-brand">AdminSena</span>
          </Link>

          {/* HAMBURGUESA */}
          <button
            className="navbar-toggler admin-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#adminNavbar"
            aria-controls="adminNavbar"
            aria-expanded="false"
            aria-label="Abrir menú"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* MENÚ */}
          <div className="collapse navbar-collapse admin-menu" id="adminNavbar">
            {user?.role === 'admin' && (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">🏠 Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/areas">📁 Áreas</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/centros">🏢 Centros de formación</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/computadores">💻 Computadores</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cursos">📚 Cursos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/instructores">👨‍🏫 Instructores</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aprendices">👨‍🎓 Aprendices</Link>
                </li>
              </ul>
            )}

            {user?.role === 'aprendiz' && (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard-aprendiz">🎓 Mi panel</Link>
                </li>
              </ul>
            )}

            {/* USUARIO */}
            {user && (
              <div className="dropdown">
                <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {user.name}
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <span className="dropdown-item-text text-muted">{user.email}</span>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button
                      onClick={handleLogout}
                      type="button"
                      className="dropdown-item text-danger"
                    >
                      Cerrar sesión
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}