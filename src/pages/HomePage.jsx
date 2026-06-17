import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import img1 from '../assets/images/1.png';
import img2 from '../assets/images/2.png';
import img3 from '../assets/images/3.png';

export default function HomePage() {

    const { t, i18n } = useTranslation();

    const imagenes = [img1, img2, img3];

    const [imagenActual, setImagenActual] = useState(0);

    useEffect(() => {

        const intervalo = setInterval(() => {

            setImagenActual((prev) =>
                prev === imagenes.length - 1 ? 0 : prev + 1
            );

        }, 5000);

        return () => clearInterval(intervalo);

    }, []);

    return (

        <section
            style={{
                backgroundImage: `url(${imagenes[imagenActual]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                position: 'relative',
                transition: 'background-image 1s ease-in-out'
            }}
        >

            {/* Capa oscura    */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,.45)'
                }}
            />

            {/* Selector de idioma
            <div
                className="position-absolute top-0 end-0 p-4"
                style={{ zIndex: 100 }}
            >
                <select
                    className="form-select"
                    value={i18n.language}
                    onChange={(e) => i18n.changeLanguage(e.target.value)}
                >
                    <option value="es">🇪🇸 Español</option>
                    <option value="en">🇬🇧 English</option>
                    <option value="it">🇮🇹 Italiano</option>
                    <option value="de">🇩🇪 Deutsch</option>
                </select>
            </div>
            */}
            {/* Contenido */}
            <div
                className="container text-center text-white"
                style={{
                    position: 'relative',
                    zIndex: 10,
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div>

                    <h1 className="display-1 fw-bold">
                        {t("titulo")}
                    </h1>

                    <h2 className="fw-light mt-4">
                        {t("subtitulo")}
                    </h2>

                    <p
                        className="fs-4 mt-5 mx-auto"
                        style={{
                            maxWidth: "900px"
                        }}
                    >
                        {t("descripcion")}
                    </p>

                    <button className="btn btn-light btn-lg mt-4 px-5 py-3">
                        {t("zoom")}
                    </button>

                </div>
            </div>

        </section>

    );
}