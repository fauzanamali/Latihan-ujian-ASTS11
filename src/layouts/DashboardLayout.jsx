// src/layouts/DashboardLayout.jsx
import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar';

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-5">
        <Outlet />
      </main>
    </div>
  );
}