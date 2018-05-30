const apiKey = '4101158aa507942f3a32c3b6ea467090';

const serchArtistsURl = 'http://ws.audioscrobbler.com/2.0/?method=artist.search&api_key=' + apiKey + '&format=json&limit=5&artist=';

const serchAllArtistsURl = 'http://ws.audioscrobbler.com/2.0/?method=artist.search&api_key=' + apiKey + '&format=json&limit=40&artist=';

const getTopArtistsURL = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=' + apiKey + '&format=json&limit=40';

const getFullInfoAboutArtistURL = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key=' + apiKey + '&format=json&artist=';

const getTopAlbumsURL = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&api_key=' + apiKey + '&format=json&limit=4&artist=';

const getFullInfoAboutAlbumURL = 'http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=' + apiKey + '&format=json&artist=';

const getSimiralArtistsURL = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key=' + apiKey + '&format=json&artist=';

export {
    apiKey,
    serchArtistsURl,
    serchAllArtistsURl,
    getTopArtistsURL,
    getFullInfoAboutArtistURL,
    getTopAlbumsURL,
    getFullInfoAboutAlbumURL,
    getSimiralArtistsURL
};
