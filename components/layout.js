import React from 'react'
import Nav from './nav'
import Footer from './footer'

const Layout = (props) => (
  <div className="main">
    <div className="logo">Logo</div>
    <div className="subtitle">Curated playlists for the music bourgeoisie</div>

    <Nav></Nav>

    {props.children}

    <Footer></Footer>

    <style jsx>{`
      h1,
      a {
        font-family: 'Arial';
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }

      .main {
        width: 700px;
        margin: auto;
      }

      .logo {
        width: 100px;
        height: 80px;
        float: left;
      }

      .subtitle {
        width: 90%
        float: right;
      }
    `}</style>
  </div>
)

export default Layout
