import React from 'react';
import Head from 'next/head'
import Link from 'next/link'

export default function Header(props) {
  const og_props = props.open_graph || {};

  const normalizeDescription = (desc) => {
    console.log(desc)
    if (typeof desc == "string") {
      return desc;
    } else { // it's an array
      const arr = [];
      desc.forEach(item => {
        if (typeof item == "string") {
          arr.push(item);
        }
      });
      return arr.join(" ");
    }
  }

  return (
    <div className="header">
      <Head>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

              ga('create', 'UA-169420141-1', 'auto');`
          }}
        />

        <title>Groove.mx</title>
        <meta name="viewport" content="width=device-width,initial-scale=1"></meta>

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={og_props.url ? `https://groove.mx/playlists/${og_props.url}` : "https://groove.mx"} />
        <meta property="og:title" content={og_props.title || "groove.mx"} />
        <meta property="og:description" content={og_props.description ? normalizeDescription(og_props.description) : "Curated playlists for the music bourgeoisie."} />
        <meta property="og:image" content={og_props.image ? `https://groove.mx/static/images/${og_props.image}.jpg` : "https://groove.mx/thumbnail.jpg"} />

        <link rel="shortcut icon" href="/static/images/favicon.ico" />
      </Head>

      <Link href="/">
        <div className="logo">groove.mx</div>
      </Link>

      <div className="subtitle">
        <p>Curated playlists for the music bourgeoisie</p>
      </div>

      <div></div>

      <style jsx>{`
        .header {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .logo {
          font-weight: bold;
          cursor: pointer;
          font-size: 4em;
          align-self: center;
        }

        .subtitle{
          font-style: italic;
          align-self: end;
        }
      `}</style>
    </div>
  )
}
