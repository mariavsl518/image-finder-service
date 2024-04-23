import axios from "axios";

axios.defaults.baseURL = 'https://api.unsplash.com/';
const accessKey = 'IkDBr_xbctBQsk5xjMfj1sygFBYbodlEZk9RM7Y008I';


export const fetchImages = async (query, page) => {
    const resp = await axios.get(`search/photos/?`, {
    params: {
        client_id:accessKey,
        query,
        orientation:'landscape',
        page,
        per_page:12,
    }
    });
    return resp.data;
};