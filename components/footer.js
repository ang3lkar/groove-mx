import React from 'react'
import Link from 'next/link'


const Footer = () => (
  <div className="footer-wrapper">
    <footer>
      With ❤︎ from Angelos, Theodore, Zaharenia
    </footer>

    <style jsx>{`
      .footer-wrapper {
        display: grid;
        padding: 1.5rem
      }

      footer {
        align-self: end
      `}</style>

  </div>
)

export default Footer
