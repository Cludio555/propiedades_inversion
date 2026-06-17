import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';

import HomePage from './pages/HomePage';
import WhyArgentinaPage from './pages/WhyArgentinaPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/why-argentina"
          element={<WhyArgentinaPage />}
        />

        <Route
          path="/services"
          element={<ServicesPage />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;