// src/components/Sidebar.jsx
import { NavLink } from 'react-router';

export default function Sidebar() {
  return (
    <aside className="w-60 min-h-screen bg-gray-100 p-5 border border-gray-300">
      <h2 className="text-xl font-bold mb-6">📚 Toko Buku</h2>
      <nav>
        <ul className="space-y-2">
          <li>
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => 
                isActive ? "block font-bold text-blue-600" : "block text-gray-700 hover:text-black"
              }
            >
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/books" 
              className={({ isActive }) => 
                isActive ? "block font-bold text-blue-600" : "block text-gray-700 hover:text-black"
              }
            >
              Katalog Buku
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/favorites" 
              className={({ isActive }) => 
                isActive ? "block font-bold text-blue-600" : "block text-gray-700 hover:text-black"
              }
            >
              Koleksi Favorit
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/help" 
              className={({ isActive }) => 
                isActive ? "block font-bold text-blue-600" : "block text-gray-700 hover:text-black"
              }
            >
              Pusat Bantuan
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}