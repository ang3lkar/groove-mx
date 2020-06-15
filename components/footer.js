import React from 'react'
import Link from 'next/link'


const Footer = () => (
  <div className="footer-wrapper">
    <footer>
      With ❤︎ from <a href="https://twitter.com/ang3lkar" target="_blank">Angelos</a> and <a href="https://twitter.com/sugarenia" target="_blank">Sugarenia</a>.
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
