import axios from 'axios';

const instance = axios.create({
    //baseURL: 'http://localhost:5001/clone-6cd05/us-central1/api' //API (Cloud Function) URL
    baseURL: 'https://us-central1-clone-6cd05.cloudfunctions.net/api' //API (Cloud Function) URL
});

export default instance;