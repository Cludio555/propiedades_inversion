import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Header() {
	const { i18n } = useTranslation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container">

                <Link
                    className="navbar-brand fw-bold"
                    to="/" translate="no"
                >
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

                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link className="nav-link text-warning" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-warning" to="/why-argentina">
                                Why_Argentina
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-warning" to="/services">
                                Services
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-warning" to="/about">
                                About_Me
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-warning" to="/contact">
                                Contact
                            </Link>
                        </li>
						
						<li className="nav-item ms-lg-3 mt-2 mt-lg-0">
							<select
								className="form-select"
								value={i18n.language}
								onChange={(e) => i18n.changeLanguage(e.target.value)}
							>
								<option value="es">🇪🇸 ES</option>
								<option value="en">🇬🇧 EN</option>
								<option value="it">🇮🇹 IT</option>
								<option value="de">🇩🇪 DE</option>
							</select>
						</li>						
                    </ul>

                </div>

            </div>

        </nav>
    );
}