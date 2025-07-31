import axios from 'axios';
import '../interceptors/jwtInterceptor';

const api = axios.create({ baseURL: '/' });

export default api;
