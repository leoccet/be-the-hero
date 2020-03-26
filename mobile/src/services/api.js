import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';


const api = axios.create({
    baseURL: 'http://10.0.0.110:3333'
});

export default api;
