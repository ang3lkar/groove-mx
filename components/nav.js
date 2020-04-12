import React from 'react'
import Link from 'next/link'


const Nav = () => (
    <nav className="nav">
      <ul>
        <li>
          <Link href="/playlists">
            <a>Playlists</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About us</a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
      .nav {
        clear: both;
      }

      .nav li {
        float: left;
        list-style-type: none;
        margin: 10px;
      }
    `}</style>

    </nav>
)

export default Nav
