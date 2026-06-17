import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contacto() {

const { t } = useTranslation();

const [email, setEmail] = useState('');
const [mensaje, setMessage] = useState('');

return (
<section
id="contacto"
style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}
> <div className="container">


    <h2 className="text-center mb-5 fw-bold">
      {t("contact_title")}
    </h2>

    <div className="row g-5">

      {/* Columna Izquierda: Datos de Contacto */}
      <div className="col-md-5">

        <h4 className="mb-4">
          {t("contact_info")}
        </h4>

        <p className="mb-3">
          <strong>📱 {t("contact_phone")}:</strong>
          <br />

          <a
            href="https://wa.me/5491164886904"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none"
          >
            +54 9 11 6488-6904 ({t("contact_whatsapp")})
          </a>

        </p>

        <p className="mb-3">

          <strong>✉️ {t("contact_email")}:</strong>

          <br />

          <a
            href="mailto:claudiorpc@yahoo.com.ar"
            className="text-decoration-none"
          >
            claudiorpc@yahoo.com.ar
          </a>

        </p>

        <p className="text-muted small mt-4">
          {t("contact_response")}
        </p>

      </div>

      {/* Columna Derecha: Formulario */}
      <div className="col-md-7">

        <h4 className="mb-4">
          {t("contact_form_title")}
        </h4>

        <form
          action="https://formsubmit.co/claudiorpc@yahoo.com.ar"
          method="POST"
        >

          <div className="mb-3">

            <label className="form-label">
              {t("contact_your_email")}
            </label>

            <input
              type="email"
              name="email"
              className="form-control"
              placeholder={t("contact_email_placeholder")}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>

          <div className="mb-3">

            <label className="form-label">
              {t("contact_message_label")}
            </label>

            <textarea
              name="mensaje"
              className="form-control"
              rows="4"
              placeholder={t("contact_message_placeholder")}
              required
              value={mensaje}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

          </div>

          <input
            type="hidden"
            name="_next"
            value="https://webint-gamma.vercel.app/gracias"
          />

          <input
            type="hidden"
            name="_template"
            value="table"
          />

          <input
            type="hidden"
            name="_captcha"
            value="false"
          />

          <button
            type="submit"
            className="btn btn-primary w-100 py-2"
          >
            {t("contact_send")}
          </button>

        </form>

      </div>

    </div>

  </div>

</section>


);
}
