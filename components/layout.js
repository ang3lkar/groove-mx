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

      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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
        grid-template-rows: 50px 50px auto 50px;
        max-width: 960px;
        margin: 2em auto;
      }
    `}</style>
  </div>
)

export default Layout
