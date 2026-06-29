import React from 'react';
import { useTranslation } from 'react-i18next';
import img1 from '../assets/images/inicio.png';

export default function HomePage() {
    const { t } = useTranslation();

    return (
        <section
            style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                position: 'relative'
            }}
        >
            {/* Capa oscura */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,.45)'
                }}
            />

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
                </div>
            </div>
        </section>
    );
}
