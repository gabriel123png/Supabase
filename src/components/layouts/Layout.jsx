import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
// Importa tu Footer si creas uno: import Footer from './Footer';

export default function Layout() {
  return (
    <>
      {/* Navbar equivalente a @include('includes.navbar') */}
      <Navbar />

      {/* Main equivalente a <main class="container mt-4 mb-5"> */}
      <main className="container mt-4 mb-5">
        {/* Outlet equivalente a @yield('content') */}
        <Outlet />
      </main>

      
    </>
  );
}