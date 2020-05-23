import React from 'react'
import Nav from './nav'
import Footer from './footer'
import Header from './header'


const Layout = (props) => (
  <div className="wrapper">
    <Header></Header>

    <Nav></Nav>

    {props.children}

    <Footer></Footer>

    <style jsx>{`

      * {
        box-sizing: border-box;
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

      .wrapper {
        display: grid;
        grid-template-rows: auto auto auto auto;
        max-width: 960px;
        min-height: 100%;
        margin: 2em auto;
        row-gap: 30px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      }
    `}</style>
  </div>
)

export default Layout
