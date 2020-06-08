import React from 'react'
import Link from 'next/link'


const Nav = () => (
    <nav className="nav">
      <ul>
        {/* <li>
          <Link href="/playlists">
            <a>Playlists</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About us</a>
          </Link>
        </li> */}
      </ul>

      <style jsx>{`
      .nav {

      }

      ul {
        display: grid;
        grid-template-columns: 100px 100px auto;
        padding: 1.5rem;
        margin: 0;
        padding: 0;
      }

      .nav li {
        list-style-type: none;
      }
    `}</style>

    </nav>
)

export default Nav
