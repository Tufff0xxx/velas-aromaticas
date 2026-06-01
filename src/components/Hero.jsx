export default function Hero() {
  return (
    <section id="inicio" style={{
      minHeight: '100vh',
        background: 'linear-gradient(160deg, #faf6f0cc 0%, #f0e6d3cc 50%, #e8d5b7cc 100%), url(/imagenes/heroVelas.jpeg) center 40%/55% no-repeat',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '120px 24px 80px',
      position: 'relative', overflow: 'hidden'
    }}>
      {/* Círculo decorativo */}
      <div style={{
        position: 'absolute', width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, #d4a85322 0%, transparent 70%)',
        top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        pointerEvents: 'none'
      }}/>

      <div style={{ maxWidth: '680px', position: 'relative' }}>
        <p style={{
          fontFamily: 'Jost', fontSize: '12px', letterSpacing: '4px',
          textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '20px'
        }}>
          ✦ Velas artesanales ✦
        </p>

        <h1 style={{
          fontFamily: 'Cormorant Garamond', fontSize: 'clamp(52px, 10vw, 90px)',
          fontWeight: 300, lineHeight: 1.05, color: 'var(--text-dark)',
          marginBottom: '28px', fontStyle: 'italic'
        }}>
          Raíz de Luz
        </h1>

        <p style={{
          fontFamily: 'Jost', fontSize: '16px', fontWeight: 300,
          color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '44px',
          maxWidth: '480px', margin: '0 auto 44px'
        }}>
          Velas artesanales elaboradas con amor, aromas naturales y la calidez de lo hecho a mano.
        </p>

        <a href="#productos" style={{
          display: 'inline-block',
          padding: '14px 40px',
          background: 'var(--terra)',
          color: '#fff',
          fontFamily: 'Jost', fontSize: '13px', letterSpacing: '3px',
          textTransform: 'uppercase', textDecoration: 'none',
          borderRadius: '2px', transition: 'background 0.3s'
        }}
        onMouseEnter={e => e.target.style.background = 'var(--terra-dark)'}
        onMouseLeave={e => e.target.style.background = 'var(--terra)'}
        >
          Ver productos
        </a>
      </div>
    </section>
  )
}