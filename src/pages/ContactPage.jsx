import React from 'react';
import Contacto from '../components/Contacto/Contacto'; // Tu componente del formulario

export default function ContactoPage() {
  return (
    <main style={{ minHeight: '80vh', padding: '40px 0' }}>
      <div className="container">
        <Contacto />
      </div>
    </main>
  );
}
