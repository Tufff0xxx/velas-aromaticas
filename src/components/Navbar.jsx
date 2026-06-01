export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 100,
      background: 'rgba(250,246,240,0.92)', backdropFilter: 'blur(8px)',
      borderBottom: '1px solid #e8d5b7',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '16px 48px'
    }}>
      <span style={{ fontFamily: 'Cormorant Garamond', fontSize: '22px', fontWeight: 600, color: 'var(--terra-dark)', letterSpacing: '2px' }}>
        Raíz de Luz
      </span>
      <div style={{ display: 'flex', gap: '32px' }}>
        {['Inicio','Productos','Contacto'].map(s => (
          <a key={s} href={`#${s.toLowerCase()}`} style={{
            fontFamily: 'Jost', fontSize: '13px', letterSpacing: '2px',
            textTransform: 'uppercase', color: 'var(--text-mid)',
            textDecoration: 'none', transition: 'color 0.2s'
          }}
          onMouseEnter={e => e.target.style.color = 'var(--terra)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-mid)'}
          >{s}</a>
        ))}
      </div>
    </nav>
  )
}