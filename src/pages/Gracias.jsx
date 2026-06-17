import React from 'react';

export default function Gracias() {
  return (
    <section
      style={{
        padding: '100px 0',
        backgroundColor: '#f8f9fa',
        minHeight: '80vh'
      }}
    >
      <div className="container text-center">

        <h1 className="mb-4">
          ✅ Mensaje enviado correctamente
        </h1>

        <p className="lead mb-5">
          Gracias por contactarnos. Nos comunicaremos con usted a la brevedad.
        </p>

        <a
          href="/"
          className="btn btn-primary"
        >
          Volver al Inicio
        </a>

      </div>
    </section>
  );
}