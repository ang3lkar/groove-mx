import React from 'react'
import playlists from '../playlists'
import Layout from '../components/layout'
import PlaylistThumbnail from './playlist-thumbnail'

const featured1 = playlists["supermassive-song-hole"]
const featured2 = playlists["uplifting-rock"]
const featured3 = playlists["the-whiskey-project"]

const Home = () => (

  <Layout>
    <div className='main'>

      <div className="featured">
        <PlaylistThumbnail
          id={featured1.route}
          title={featured1.title}
          subtitle={featured1.subtitle}
          backgroundImage={featured1.image}
        ></PlaylistThumbnail>

        <PlaylistThumbnail
          id={featured2.route}
          title={featured2.title}
          subtitle={featured2.subtitle}
          backgroundImage={featured2.image}
         ></PlaylistThumbnail>

        <PlaylistThumbnail
          id={featured3.route}
          title={featured3.title}
          subtitle={featured3.subtitle}
          backgroundImage={featured3.image}
         ></PlaylistThumbnail>

        <PlaylistThumbnail
          id={featured1.route}
          title={featured1.title}
          subtitle={featured1.subtitle}
          backgroundImage={featured1.image}
        ></PlaylistThumbnail>

        <PlaylistThumbnail
          id={featured2.route}
          title={featured2.title}
          subtitle={featured2.subtitle}
          backgroundImage={featured2.image}
         ></PlaylistThumbnail>

        <PlaylistThumbnail
          id={featured3.route}
          title={featured3.title}
          subtitle={featured3.subtitle}
          backgroundImage={featured3.image}
         ></PlaylistThumbnail>
      </div>

    </div>

    <style jsx>{`
      .main {
        margin:0;
        padding:0;
        height:100%; /* needed for container min-height */
      }

      .featured {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 1rem;
      }
      `}</style>
  </Layout>
)

export default Home
