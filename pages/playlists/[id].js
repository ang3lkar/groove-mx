import {useEffect} from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import playlists from '../../playlists'

const Playlist = (props) => {
  const router = useRouter()
  const { id } = router.query

  if (!id) return <p></p>
  const config = playlists.find(playlist => playlist.route == id);

  const open_graph = {
    url: config.route,
    title: config.title,
    description: config.subtitle,
    image: config.route
  };

  const openOnSpotify = () => {
    ga('send', {
      hitType: 'event',
      eventCategory: 'OpenOnSpotify',
      eventAction: 'open',
      eventLabel: config.route
    });
    window.open(`spotify:playlist:${config.spotifyId}`);
  }

  useEffect(() => {
    ga('send', 'pageview', document.location.pathname);
  });

  return (
    <Layout open_graph={open_graph}>
      <div className="playlist">

        <div className="cover">
          <img src={`/static/images/${config.route}.jpg`} />
          <p className="preview-header">{config.title}</p>
          <p className="preview-text">{config.subtitle}</p>
          <div className="spotify-button" onClick={openOnSpotify}>Open on Spotify</div>
          <p>{config.tags}</p>
        </div>

        <div className="tracklist">
          <iframe
            src={`https://open.spotify.com/embed/playlist/${config.spotifyId}`}
            allowtransparency="true"
            width="700">
          </iframe>
        </div>

        <style jsx>{`
          .playlist {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          }

          .preview-header {
            font-size: 14px;
            font-weight: bold;
          }

          .preview-text {
            color: gray;
            font-size: 14px;
            width: 80%;
          }

          .spotify-button {
            margin-top: 20px;
            line-height: 32px;
            display: block;
            text-align: center;
            text-decoration: none;
            background: #1db954;
            border-radius: 35px;
            cursor: pointer;
            font-size: 14px;
            text-transform: uppercase;
            color: white;
            letter-spacing: 2px;
            width: 300px;
            border: 0;
            text-shadow: none;
          }

          .spotify-button:hover {
            background: #1ed65e;
          }

          .cover img {
            width: 300px;
            height: 300px;
          }

          .tracklist {
            overflow: hidden;
            padding-top: 56.25%;
            position: relative;
          }

          .tracklist iframe {
             border: 0;
             height: 100%;
             left: 0;
             position: absolute;
             top: 0;
             width: 100%;
          }

          /* 4x3 Aspect Ratio */
          .iframe-container-4x3 {
            padding-top: 75%;
          }
        `}</style>
      </div>
    </Layout>
  );
}

// https://stackoverflow.com/questions/62025857/server-side-render-dynamic-page-based-on-route-param
export const getStaticPaths = async () => {
  const paths = playlists.map((item) => {
     return { params: { id: item.route } }
  });

  // we are disabling fallback because we know all the paths ahead of time
  return { paths, fallback: false }
}

// This function gets called at build time on server-side.
export async function getStaticProps(context) {
  return {
    props: {
      id: context.params.id
    },
  }
}

export default Playlist;
