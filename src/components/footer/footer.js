import './footer.scss'

export default function Footer() {
  return (
    <div id="footer">
      &copy;{new Date().getFullYear()} Fine Art by Mitra. Designed by Fine Art by Mitra. Built by <a href="https://minnedev.com" rel="noreferrer" target="_blank">Minnedev</a>
    </div>
  )
}