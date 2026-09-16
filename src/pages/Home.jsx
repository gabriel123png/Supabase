import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <>
      
      {/* TÍTULO PRINCIPAL */}
      <div className="text-center">
        <h1 className="mb-4">Bienvenido a AdminSena</h1>
        <p className="lead">Sistema de administración del SENA</p>
      </div>

      {/* CARRUSEL DE IMÁGENES */}
      <div id="senaCarousel" className="carousel slide mt-4 mb-5" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="hover">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#senaCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Imagen 1"></button>
          <button type="button" data-bs-target="#senaCarousel" data-bs-slide-to="1" aria-label="Imagen 2"></button>
          <button type="button" data-bs-target="#senaCarousel" data-bs-slide-to="2" aria-label="Imagen 3"></button>
        </div>
        <div className="carousel-inner rounded shadow-sm">
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80" className="d-block w-100 sena-carousel-image" alt="Estudiantes en formación" />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
              <h5>Formación para el futuro</h5>
              <p>Educación y oportunidades para todos.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80" className="d-block w-100 sena-carousel-image" alt="Trabajo colaborativo en formación" />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
              <h5>Aprendizaje colaborativo</h5>
              <p>Construyendo conocimiento en equipo.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80" className="d-block w-100 sena-carousel-image" alt="Tecnología y aprendizaje" />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
              <h5>Innovación y tecnología</h5>
              <p>Preparación para los nuevos desafíos.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#senaCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#senaCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      {/* TARJETAS DEL DASHBOARD */}
      <div className="row mt-5 dashboard-grid">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm dashboard-card">
            <div className="card-body text-center">
              <h5 className="card-title">Áreas</h5>
              <p className="card-text">Gestiona las áreas del SENA.</p>
              <Link to="/areas" className="btn btn-success">Ver Áreas</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm dashboard-card">
            <div className="card-body text-center">
              <h5 className="card-title">Centros de formación</h5>
              <p className="card-text">Gestiona los centros de formación.</p>
              <Link to="/centros" className="btn btn-success">Ver Centros</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm dashboard-card">
            <div className="card-body text-center">
              <h5 className="card-title">Computadores</h5>
              <p className="card-text">Gestiona los computadores.</p>
              <Link to="/computadores" className="btn btn-success">Ver Computadores</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm dashboard-card">
            <div className="card-body text-center">
              <h5 className="card-title">Instructores</h5>
              <p className="card-text">Gestiona los instructores.</p>
              <Link to="/instructores" className="btn btn-success">Ver Instructores</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm dashboard-card">
            <div className="card-body text-center">
              <h5 className="card-title">Cursos</h5>
              <p className="card-text">Gestiona los cursos.</p>
              <Link to="/cursos" className="btn btn-success">Ver Cursos</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm dashboard-card">
            <div className="card-body text-center">
              <h5 className="card-title">Aprendices</h5>
              <p className="card-text">Gestiona los aprendices.</p>
              <Link to="/aprendices" className="btn btn-success">Ver Aprendices</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}