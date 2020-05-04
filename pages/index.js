import React from 'react'
import playlists from '../playlists'
import Layout from '../components/layout'
import PlaylistThumbnail from './playlist-thumbnail'

const featuredPlaylistElements = []

playlists.forEach(playlist => {
  if (playlist.featured == true) {
    featuredPlaylistElements.push(
      <PlaylistThumbnail
        id={playlist.route}
        title={playlist.title}
        subtitle={playlist.subtitle}
        backgroundImage={`static/${playlist.route}.jpg`}
      ></PlaylistThumbnail>
    )
  }
});

const Home = () => (

  <Layout>
    <div className='main'>
      <div className="featured">
        { featuredPlaylistElements }
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
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        column-gap: 10px;
        row-gap: 50px;
      }
      `}</style>
  </Layout>
)

export default Home
