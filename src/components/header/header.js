import './header.scss'

export default function Header() {
  return (
    <div className="header">
      <h1>
        Fine Art by Mitra
      </h1>
      <hr />
      <div className="nav">
        <a href="#bio">Biography</a>
        <a href="#sketches">Sketches</a>
        <a href="#paintings">Paintings</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  )
}