import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ServicesPage() {


const { t } = useTranslation();

return (

        /* 1. Fondo marrón oscuro para toda la sección */
    <div style={{ backgroundColor: '#737373', width: '100%', minHeight: '100vh' }}>
		<div className="container py-5">

        <div className="row g-5">

            {/* REAL ESTATE */}
            <div className="col-lg-6">

                <div className="card shadow h-100 border-0">

                    <div className="card-body p-5">

                        <h3 className="fw-bold mb-3">
                            🏡 {t("realestate_title")}
                        </h3>

                        <h4 className="text-primary mb-4">
                            {t("propertyfinder")}
                        </h4>

                        <p className="lead">
                            {t("realestate_description")}
                        </p>

                        <ul className="mt-4">
                            <li>{t("service1")}</li>
                            <li>{t("service2")}</li>
                            <li>{t("service3")}</li>
                            <li>{t("service4")}</li>
                            <li>{t("service5")}</li>
                        </ul>

                        <h5 className="mt-4 fw-bold">
                            {t("service_premium")}
                        </h5>

                    </div>

                </div>

            </div>

            {/* MERCADO DE CAPITALES */}
            <div className="col-lg-6">

                <div className="card shadow h-100 border-0">

                    <div className="card-body p-5">

                        <h3 className="fw-bold mb-3">
                            📈 {t("capitalmarket_title")}
                        </h3>

                        <h4 className="text-primary mb-4">
                            {t("account_opening")}
                        </h4>

                        <p className="lead">
                            {t("capitalmarket_description")}
                        </p>

                        <ul className="mt-4">
                            <li>{t("market1")}</li>
                            <li>{t("market2")}</li>
                            <li>{t("market3")}</li>
                            <li>{t("market4")}</li>
                        </ul>

                        <h5 className="mt-4 fw-bold">
                            {t("market_footer")}
                        </h5>

                    </div>

                </div>

            </div>

        </div>

		</div>
	</div>

);


}
