import React from 'react'
import Link from 'next/link'


const Footer = () => (
  <div className="footer-wrapper">
    <footer>
      With ❤︎ from Angelos and Sugarenia.
    </footer>

    <style jsx>{`
      .footer-wrapper {
        grid-row-start: 4;
        grid-row-end: 5;
        display: grid;
      }

      footer {
        align-self: end
      `}</style>

  </div>
)

export default Footer
