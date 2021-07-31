import axios from 'axios';

const getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")

    return movies;
}
//get으로 할경우, has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
// 오류가 발생
// const toTheYoutube = async () => {
//     await axios.get("https://www.youtube.com/watch?v=w7ejDZ8SWv8");
// }

export {getMovies };