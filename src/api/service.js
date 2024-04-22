import axios from "axios";
const apiKey = '8c2fffde2f0c59b4e79b2568585188dd'
const baseUrl = 'https://corsproxy.io/?https://api.musixmatch.com/ws/1.1'

export const search = async (query) => {
    try {
        const response = await axios.get(`${baseUrl}/track.search?q_track=${query}&page_size=15&page=1&s_track_rating=desc&apikey=${apiKey}`)
        return response.data.message.body.track_list
    } catch (error) {
        console.log(error)
    }
}

export const getLyrics = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/track.lyrics.get?track_id=${id}&apikey=${apiKey}`)
        return response.data.message.body.lyrics.lyrics_body
    } catch (error) {
        console.log(error)
    }
}