import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import PlaylistThumbnail from './playlist-thumbnail'

const Home = (props) => (
  <Layout>
    <div className='main'>

      <div className="featured">
        <PlaylistThumbnail></PlaylistThumbnail>
      </div>

    </div>

    <style jsx>{`
      .main {
        margin:0;
        padding:0;
        height:100%; /* needed for container min-height */
      }

      .featured {
        clear: both;
      }
      `}</style>
  </Layout>
)

export default Home
