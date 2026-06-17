import { useTranslation } from 'react-i18next';
// import fotoClaudio from '../assets/images/claudio.jpg';

export default function AboutPage() {

    const { t } = useTranslation();

    return (

        <div className="container py-5">

            <div className="row align-items-center">

                {/* FOTO */}
                <div className="col-lg-4 text-center mb-5">

                    {/* Cuando tengas la foto, descomenta esto */}
                    {/*
                    <img
                        src={fotoClaudio}
                        alt="Claudio Ríos"
                        className="img-fluid rounded shadow"
                        style={{ maxWidth: "300px" }}
                    />
                    */}

                </div>

                {/* TEXTO */}
                <div className="col-lg-8">

                    <h1 className="fw-bold mb-4">
                        {t("about_title")}
                    </h1>

                    <h3 className="text-primary mb-4">
                        {t("about_subtitle")}
                    </h3>

                    <p className="lead">
                        {t("about_p1")}
                    </p>

                    <p>
                        {t("about_p2")}
                    </p>

                    <p>
                        {t("about_p3")}
                    </p>

                    <div className="mt-5">

                        <h4 className="mb-3">
                            {t("about_values")}
                        </h4>

                        <ul>
                            <li>{t("about_value1")}</li>
                            <li>{t("about_value2")}</li>
                            <li>{t("about_value3")}</li>
                            <li>{t("about_value4")}</li>
                        </ul>

                    </div>

                    <div className="mt-5">

                        <h5 className="fst-italic text-secondary">
                            {t("about_footer")}
                        </h5>

                    </div>

                </div>

            </div>

        </div>

    );

}