import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import config from '../../lib/config';

export default function Playlist(props) {
  const router = useRouter()
  const { id } = router.query

  if (!id) return <p></p>

  const spotifyId = config[id]['spotifyId']
  const title = config[id]['title']
  const imageUrl = config[id]['image']

  return (
    <Layout>
      <div className="playlist">

        <div className="cover">
          <img src={imageUrl} />
          <p>{title}</p>
        </div>

        <div className="tracklist">
          <iframe
            src={`https://open.spotify.com/embed/playlist/${spotifyId}`}
            width="500"
            height="680"
            allowtransparency="true"
            allow="encrypted-media">
          </iframe>
        </div>

        <style jsx>{`
          .playlist {
            margin: 2em ;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            grid-gap: 1rem;
          }

          .cover {

          }

          .cover img {
            width: 300px;
            height: 300px;
          }

          .tracklist {
            justify-self: end;
            width: 500px;
          }
        `}</style>
      </div>
    </Layout>
  );
}
