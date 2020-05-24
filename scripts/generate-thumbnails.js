import fs from 'fs';
import request from 'request';
import SpotifyWebApi from 'spotify-web-api-node';
import playlists from '../playlists';

var spotifyApi = new SpotifyWebApi({
  clientId: process.env.GROOVE_MX_SPOTIFY_CLIENT_ID,
  clientSecret: process.env.GROOVE_MX_SPOTIFY_CLIENT_SECRET
});

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    // console.log('content-type:', res.headers['content-type']);
    // console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

// Retrieve an access token
spotifyApi.clientCredentialsGrant().then(
  function(data) {
    // console.debug('The access token expires in ' + (data.body['expires_in']) / 60 + ' minutes');
    // console.debug('The access token is ' + data.body['access_token']);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);

    playlists.forEach((playlist) => {
      spotifyApi.getPlaylist(playlist.spotifyId).then(function(response) {
        const data = response.body;

        // Get image
        const imageName = playlist.route + '.jpg';
        const imagePath = 'static/' + imageName;
        const imageUrl = data.images[0].url;

        download(imageUrl, imagePath, function(){
          console.log('Generated ' + imagePath);
        });

      }, function(err) {
        console.log('Something went wrong!', err);
      });
    });
  },
  function(err) {
    console.log(
      'Something went wrong when retrieving an access token',
      err.message
    );
  }
);
