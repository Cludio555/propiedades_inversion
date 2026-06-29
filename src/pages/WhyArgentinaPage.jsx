import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import img1 from '../assets/images/1.png';
import img2 from '../assets/images/2.png';
import img3 from '../assets/images/3.png';

export default function WhyArgentinaPage() {
	
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

                    <h1 className="display-6 fw-bold">
                        {t("why_argentina")}
                    </h1>

					<ul className="lh-lg text-start ps-3">
					  <li>
						<strong>{t("t_why_argentina_01")}</strong> {t("why_argentina_01")}
					  </li>
					  <li>
						<strong>{t("t_why_argentina_02")}</strong> {t("why_argentina_02")}
					  </li>
					  <li>
						<strong>{t("t_why_argentina_03")}</strong> {t("why_argentina_03")}
					  </li>
					  <li>
						<strong>{t("t_why_argentina_04")}</strong> {t("why_argentina_04")}
					  </li>
					</ul>

                    {/*
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
					*/}

                </div>
            </div>

        </section>

    );
}