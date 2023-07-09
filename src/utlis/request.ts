const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

const requests = {
  trendingNow: `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
  popularNow: `${BASE_URL}/movie/popular?api_key=${API_KEY}&certification.lte=G&certification_country=US&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  horrorAndThriller: `${BASE_URL}/discover/movie?api_key=${API_KEY}&certification.lte=M&certification_country=US&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27%2C53`,
  comedy: `${BASE_URL}/discover/movie?api_key=${API_KEY}&certification.lte=G&certification_country=US&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35`,
  documentary: `${BASE_URL}/discover/movie?api_key=${API_KEY}&certification.lte=PG&certification_country=US&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=99`,
  family: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10751`,
  action: `${BASE_URL}/discover/movie?api_key=${API_KEY}&certification.lte=G&certification_country=US&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28`,
  fantasy: `${BASE_URL}/discover/movie?api_key=${API_KEY}&certification.lte=G&certification_country=US&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=14`,
  tvShows: `${BASE_URL}/discover/movie?api_key=${API_KEY}&certification.lte=M&certification_country=US&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10770`,

}
export default requests