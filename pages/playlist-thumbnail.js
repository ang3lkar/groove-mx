import Link from 'next/link'

export default function PlaylistThumbnail() {
  return (
    <Link href="/playlist">
      <div className="preview">
        <div className="cover-art-image"></div>
        <div>
          <p className="preview-header">Supermassive Song Hole</p>
          <p className="preview-text">A bucket of songs</p>
        </div>

        <style jsx>{`
        .preview {
          width: 180px;
          height: 240px;
          padding: 5px;
          border: 1px solid #333;
          cursor: pointer;
        }

        .cover-art-image {
          width: 180px;
          height: 180px;
          background-image: url('https://raw.githubusercontent.com/ang3lkar/playlist-covers/master/supermassive-song-hole.jpg');
          background-size: cover;
        }

        .preview-header {
          font-size: 14px;
          font-weight: bold;
        }

        .preview-text {
          margin: 5px;
          font: Verdana;
          font-size: 12px;
        }
      `}</style>
      </div>
    </Link>
  );
}
