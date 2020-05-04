import Head from 'next/head'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="header">
      <Head>
        <title>Groove.mx</title>
        <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>

      <Link href="/">
        <div className="logo">groove.mx</div>
      </Link>

      <div className="subtitle">
        <p>Curated playlists for the music bourgeoisie</p>
      </div>

      <style jsx>{`
        .header {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          padding: 2px;
          justify-content: stretch;
        }

        .logo {
          font-weight: bold;
          cursor: pointer;
          font-size: 4em;
          align-self: center;
        }

        .subtitle{
          font-style: italic;
          align-self: center;
        }
      `}</style>
    </div>
  )
}
