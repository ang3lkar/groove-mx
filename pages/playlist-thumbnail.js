import Link from 'next/link'

export default function PlaylistThumbnail(props) {
  return (
    <Link href='/playlists/[id]' as={`/playlists/${props.id}`}>
      <div className="preview">
        <div className="cover-art-image">
          <img width="250" height="250" src={props.backgroundImage}></img>
        </div>
        <div>
          <p className="preview-header">{props.title}</p>
          <p className="preview-text">{props.subtitle}</p>
        </div>

        <style jsx>{`
        .preview {
          cursor: pointer;
        }

        .preview-header {
          font-size: 14px;
          font-weight: bold;
        }

        .preview-text {
          font-size: 12px;
        }
      `}</style>
      </div>
    </Link>
  );
}
