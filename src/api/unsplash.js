import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID yR5KFsWkfeLvFYDiP8WIn6OH6cm5Rj0xrhG5M0F708I'
      }
});


