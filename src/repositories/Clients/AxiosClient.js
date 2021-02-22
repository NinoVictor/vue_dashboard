import axios from 'axios'

const baseDomain = "";
const baseURL = `${baseDomain}`;

//Todas las configuraciones de Axios

export default axios.create({
    baseURL,
    headers: {
        //Authorization: "Barer xxxxx"
    }
});