import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Specialties from './pages/Specialties';
import Specialists from './pages/Specialists';
import Blog from './pages/Blog';
import Opinions from './pages/Opinions';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="especialidades" element={<Specialties />} />
          <Route path="especialistas" element={<Specialists />} />
          <Route path="blog" element={<Blog />} />
          <Route path="opiniones" element={<Opinions />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="agenda" element={<Booking />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
