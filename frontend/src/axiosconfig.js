import axios from 'axios'

const podUrl = 'yellow-badger-eus60pm5.ws-us03.gitpod.io/'

export const postAxios = axios.create({
    baseURL: 'https://4000-' + podUrl
})

