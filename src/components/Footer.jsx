export default function Footer() {
  return (
    <footer style={{
      background: 'var(--text-dark)', color: 'var(--text-light)',
      textAlign: 'center', padding: '32px 24px',
      fontFamily: 'Jost', fontSize: '13px', letterSpacing: '1px'
    }}>
      © {new Date().getFullYear()} Raíz de Luz · Velas artesanales hechas con amor
    </footer>
  )
}