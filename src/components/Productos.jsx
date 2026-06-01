const productos = [
  {
    nombre: 'Vela Lavanda & Vainilla',
    descripcion: 'Aroma suave y relajante, ideal para el descanso.',
    precio: '$XXXX',
    imagen: '/velas-aromaticas/imagenes/vela1.jpeg', // ← reemplazá con tu foto
  },
  {
    nombre: 'Vela Sándalo & Cedro',
    descripcion: 'Notas amaderadas cálidas para ambientes acogedores.',
    precio: '$XXXX',
    imagen: '/velas-aromaticas/imagenes/vela2.jpeg',
  },
  {
    nombre: 'Vela Rosa & Jazmín',
    descripcion: 'Floral y delicada, perfecta para regalar.',
    precio: '$XXXX',
    imagen: '/velas-aromaticas/imagenes/vela3.jpeg',
  },
  {
    nombre: 'Vela Rosa & Jazmín',
    descripcion: 'Floral y delicada, perfecta para regalar.',
    precio: '$XXXX',
    imagen: '/velas-aromaticas/imagenes/vela4.jpeg',
  },
  {
    nombre: 'Vela Rosa & Jazmín',
    descripcion: 'Floral y delicada, perfecta para regalar.',
    precio: '$XXXX',
    imagen: '/velas-aromaticas/imagenes/vela5.jpeg',
  },
]

export default function Productos() {
  return (
    <section id="productos" style={{
      padding: '100px 48px',
      background: 'var(--warm-white)',
    }}>
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <p style={{ fontFamily: 'Jost', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '12px' }}>
          ✦ Colección ✦
        </p>
        <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: 'clamp(36px,6vw,56px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text-dark)' }}>
          Nuestras velas
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '36px', maxWidth: '1100px', margin: '0 auto'
      }}>
        {productos.map((p, i) => (
          <div key={i} style={{
            background: 'var(--cream)', borderRadius: '4px',
            overflow: 'hidden', boxShadow: '0 4px 24px #0000000a',
            transition: 'transform 0.3s, box-shadow 0.3s'
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 40px #0000001a' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px #0000000a' }}
          >
            <div style={{ height: '280px', overflow: 'hidden', background: 'var(--brown-soft)' }}>
              <img src={p.imagen} alt={p.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '28px 24px' }}>
              <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: '22px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '8px' }}>
                {p.nombre}
              </h3>
              <p style={{ fontFamily: 'Jost', fontSize: '14px', color: 'var(--text-light)', lineHeight: 1.7, marginBottom: '16px' }}>
                {p.descripcion}
              </p>
              <p style={{ fontFamily: 'Cormorant Garamond', fontSize: '20px', color: 'var(--terra)', fontWeight: 600 }}>
                {p.precio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}