"use client";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { i18n } = useTranslation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" href="/" translate="no">
          Real Estate and Capital Markets
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-warning" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning" href="/why-argentina">Why_Argentina</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning" href="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning" href="/about">About_Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning" href="/contact">Contact</Link>
            </li>
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <select
                className="form-select"
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
              >
                <option value="es">🇪🇸 ES</option>
                <option value="en">🇬🇧 EN</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}