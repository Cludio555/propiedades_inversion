import React, { useState } from 'react';

export default function Contacto() {
  const [email, setEmail] = useState('');
  const [mensaje, setMessage] = useState('');

  return (
    <section
      id="contacto"
      style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}
    >
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">
          Contactame
        </h2>

        <div className="row g-5">
          {/* Columna Izquierda: Datos de Contacto */}
          <div className="col-md-5">
            <h4 className="mb-4">Información de Contacto</h4>

            <p className="mb-3">
              <strong>📱 Teléfono / WhatsApp:</strong>
              <br />
              <a
                href="https://wa.me/5491164886904"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
              >
                +54 9 11 6488-6904 (Enviar WhatsApp)
              </a>
            </p>

            <p className="mb-3">
              <strong>✉️ Correo Electrónico:</strong>
              <br />
              <a
                href="mailto:claudiorpc@yahoo.com.ar"
                className="text-decoration-none"
              >
                claudiorpc@yahoo.com.ar
              </a>
            </p>

            <p className="text-muted small mt-4">
              * Respondemos todos los pedidos de informes en menos de 24 horas
              hábiles.
            </p>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="col-md-7">
            <h4 className="mb-4">
              Dejame tu Consulta o Pedido de Informe
            </h4>

            <form
              action="https://formsubmit.co/claudiorpc@yahoo.com.ar"
              method="POST"
            >
              <div className="mb-3">
                <label className="form-label">
                  Tu Correo Electrónico
                </label>

                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="nombre@ejemplo.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Pasame tu consulta
                </label>

                <textarea
                  name="mensaje"
                  className="form-control"
                  rows="4"
                  placeholder="..."
                  required
                  value={mensaje}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              {/* Redirección a una página propia */}
              <input
                type="hidden"
                name="_next"
                value="https://webint-gamma.vercel.app/gracias"
              />

              {/* Formato del correo */}
              <input
                type="hidden"
                name="_template"
                value="table"
              />

              {/* Desactiva captcha */}
              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <button
                type="submit"
                className="btn btn-primary w-100 py-2"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}