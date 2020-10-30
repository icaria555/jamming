const token = '2b00ab4401d947d7828ae10db7a65496';
const secret = '1c9a9a616b6e4c77b0107443011740e9';
const fetch = require('node-fetch');
let userAccesToken = '';

const  Spotify = {
    getAccessToekn: () => {
        if(userAccesToken) {
            return userAccesToken;
        } else {
            fetch('https://accounts.spotify.com/authorize' + 
            '?client_id=' + token +
            '&response_type=token')
                .then(response => response.json)
                .then(data => {
                    console.log(data)
                });
        }
    }
};

Spotify.getAccessToekn();

//export {Spotify};