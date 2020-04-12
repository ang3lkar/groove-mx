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

      <div className="subtitle">Curated playlists for the music bourgeoisie</div>

      <style jsx>{`
        .header {
          display: grid;
          grid-template-columns: 100px auto;
          padding: 1.5rem;
        }

        .logo {
          font-weight: bold;
          cursor: pointer;
        }

        .subtitle {
          font-style: italic;
        }
      `}</style>
    </div>
  )
}
