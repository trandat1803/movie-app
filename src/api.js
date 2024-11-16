/*import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/';
//const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const API_KEY = '148c8c91a329d210cfc8b8b2ed6c79d0'

const apiService = axios.create({baseURL : API_URL});

apiService.interceptors.request.use(
  (request ) => {
    return request;
  },
  function(error){return Promise.reject(error);}
)

apiService.interceptors.response.use(
  (response ) => {
    return response;
  },(error) =>{
    return Promise.reject(error);
  }
)

export default apiService
// export const fetchMovies = async () => {
//   try {
//     const response = await axios.get(`${API_URL}`, {
//       headers: {
//         accept: 'application/json',
//         authorization: `Bearer ${API_KEY}`,
//       },
//     });
//     return response.data.results;
//   } catch (error) {
//     console.error('Error fetching movies:', error);
//     return [];
//   }
// };

*/