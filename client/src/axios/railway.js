import axios from "axios"

const instance = axios.create({
    baseURL: "https://pokemonapp-back-production.up.railway.app",

  });

  export default instance