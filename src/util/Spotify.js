const token = '2b00ab4401d947d7828ae10db7a65496';
const secret = '1c9a9a616b6e4c77b0107443011740e9';
const fetch = require('node-fetch');
const scopes = 'playlist-modify-public';
const redirect_uri = 'http://localhost:3000/'
const expiresIn = 3600;
let accessToken = '';

window.setTimeout(() => accessToken = '', expiresIn * 1000);
window.history.pushState('Access Token', null, '/');

const Spotify = {
    setAccessToken: (token) => {
        accessToken = token;
    },
    getAccessToken: () => {
        if (accessToken) {
            return accessToken;
        } else {
            const loginUrl = 'https://accounts.spotify.com/authorize?' +
                'client_id=' + token +
                (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
                '&redirect_uri=' + encodeURIComponent(redirect_uri) +
                '&response_type=token';
            window.location = loginUrl;
        }
    },
    search: (term) => {
        fetch('api.spotify.com/v1/search?type=track&q=' + encodeURIComponent(term),
            {
                headers: { Authorization: `Bearer ${accessToken}` }
            })
            .then(response => {
                return response.json;
            })
            .then(data => {
                console.log(data)
            });
    },
    savePlaylist: (nameOfPlaylist, trackUrls) => {
        if (!nameOfPlaylist && !trackUrls) {
            return;
        }

        const currentAccessToken = accessToken;
        const header = { Authorization: `Bearer ${currentAccessToken}` };
        let userId = '';
        let playlist = [];
        fetch('https://api.spotify.com/v1/me', { headers: header })
            .then(response => {
                return response.json;
            })
            .then(data => {
                userId = data;
            })
            .then(() => {
                return fetch(`/v1/users/${userId}/playlists`, { headers: header })
            })
            .then(response => {
                return response.json;
            })
            .then(data => {
                playlist = data;
            })
            .then(() => {
                return fetch(`/v1/users/${userId}/playlists/${playlist}/tracks`, { headers: header })
            });
    }
};

export default Spotify;