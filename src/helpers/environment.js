let APIURL = '';

switch (window.location.hostname) {
  // this is the local host name of your react app
  case 'localhost' || '127.0.0.1':
    //this is the local host name of your API
    APIURL = 'http://localhost:3000';
    break;
  case 'bluebadge-movie-app-client.herokuapp.com':
    APIURL = 'https://bluebadge-movie-app-client.herokuapp.com';
}

export default APIURL;
