"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function Contacto() {
  const { t } = useTranslation();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [mensaje, setMessage] = useState('');
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error', 'connection'
  const [errorDetail, setErrorDetail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorDetail('');

    const WORKER_URL = "https://contactfrombackend.riosclaudiop.workers.dev";

    try {
      const response = await fetch(WORKER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          mensaje: mensaje,
          clientId: "propiedades_inversion_mundial",
          origen: "Sobre propiedades e inversion"
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setMessage('');

        setTimeout(() => {
          router.push('/gracias');
        }, 2000);
      } else {
        setStatus('error');
        setErrorDetail(data.error || '');
      }
    } catch (error) {
      console.error("Connection error:", error);
      setStatus('connection');
    }
  };

  return (
    <section id="contacto" style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
      <div className="container">
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
              <a href="https://wa.me/5491164886904" target="_blank" rel="noreferrer" className="text-decoration-none">
                +54 9 11 6488-6904 ({t("contact_whatsapp")})
              </a>
            </p>

            <p className="mb-3">
              <strong>✉️ {t("contact_email")}:</strong>
              <br />
              <span className="text-primary">
                {t("contact_online_form")}
              </span>
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

            <form onSubmit={handleSubmit}>
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

              <button
                type="submit"
                className="btn btn-primary w-100 py-2"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? t("contact_sending") : t("contact_send")}
              </button>

              {status === 'success' && (
                <div className="alert alert-success mt-3">
                  {t("contact_success")}
                </div>
              )}

              {status === 'error' && (
                <div className="alert alert-danger mt-3">
                  {t("contact_error")} {errorDetail}
                </div>
              )}

              {status === 'connection' && (
                <div className="alert alert-danger mt-3">
                  {t("contact_connection_error")}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}