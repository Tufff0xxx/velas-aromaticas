export default function Contacto() {
  const whatsapp = 'https://wa.me/TU_NUMERO?text=Hola!%20Me%20interesan%20las%20velas%20✨'
  const instagram = 'https://instagram.com/raizdeluz2026'

  return (
    <section id="contacto" style={{
      padding: '100px 48px',
      background: 'linear-gradient(160deg, #e8d5b7 0%, #f0e6d3 100%)',
      textAlign: 'center'
    }}>
      <p style={{ fontFamily: 'Jost', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '12px' }}>
        ✦ Contacto ✦
      </p>
      <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: 'clamp(36px,6vw,56px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text-dark)', marginBottom: '20px' }}>
        Escribinos
      </h2>
      <p style={{ fontFamily: 'Jost', fontSize: '15px', color: 'var(--text-mid)', marginBottom: '52px', maxWidth: '420px', margin: '0 auto 52px', lineHeight: 1.8 }}>
        ¿Querés hacer un pedido o tenés alguna consulta? Estamos a un mensaje de distancia.
      </p>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href={whatsapp} target="_blank" rel="noreferrer" style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          padding: '14px 36px', background: '#25D366', color: '#fff',
          fontFamily: 'Jost', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase',
          textDecoration: 'none', borderRadius: '2px', transition: 'opacity 0.2s'
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          💬 WhatsApp
        </a>

        <a href={instagram} target="_blank" rel="noreferrer" style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          padding: '14px 36px', background: 'var(--terra)', color: '#fff',
          fontFamily: 'Jost', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase',
          textDecoration: 'none', borderRadius: '2px', transition: 'opacity 0.2s'
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          📷 Instagram
        </a>
      </div>
    </section>
  )
}