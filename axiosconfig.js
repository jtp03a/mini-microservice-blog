const axios = require('axios');

const podUrl = 'yellow-badger-eus60pm5.ws-us03.gitpod.io/'

const postAxios = axios.create({
    baseURL: 'https://4000-' + podUrl
})

const commentAxios = axios.create({
    baseURL: 'https://4001-' + podUrl
})

const queryAxios = axios.create({
    baseURL: 'https://4002-' + podUrl
})

const moderationAxios = axios.create({
    baseURL: 'https://4003-' + podUrl
})

const eventAxios = axios.create({
    baseURL: 'https://4005-'
});

exports.eventAxios = eventAxios
exports.postAxios = postAxios