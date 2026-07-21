import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contacto() {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [mensaje, setMessage] = useState('');
  const [status, setStatus] = useState(''); // Maneja el estado visual del envío ('Cargando', 'Éxito', etc.)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    // REEMPLAZA ESTA URL POR LA QUE TE DA TU WORKER AL DESPLEGARLO
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
          clientId: "propiedades_inversion_mundial" // Este ID le dice al Worker que use claudiorpc@yahoo.com.ar
          origen: "Sobre propiedades e inversion"       // Nombre de la web para la carpeta		  
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('¡Mensaje enviado con éxito!');
        setEmail('');
        setMessage('');
        
        // Simula la redirección automática a la página de gracias tras 2 segundos si lo deseas
        setTimeout(() => {
          window.location.href = "https://latamventuresrealty.com/gracias";
        }, 2000);

      } else {
        setStatus(`Error: ${data.error || 'No se pudo enviar'}`);
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      setStatus('Hubo un problema de conexión con el servidor.');
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
              {/* Ocultamos tu email real de la etiqueta href para evitar scrapers de spam informáticos */}
              <span className="text-primary" style={{ cursor: 'pointer' }}>
                Formulario en línea
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

            {/* Cambiamos el action tradicional por el onSubmit controlado de React */}
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
                disabled={status === 'Enviando...'}
              >
                {status === 'Enviando...' ? 'Enviando...' : t("contact_send")}
              </button>

              {/* Muestra un cartel abajo indicando el estado del envío */}
              {status && (
                <div className={`alert mt-3 ${status.includes('éxito') ? 'alert-success' : 'alert-info'}`}>
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
