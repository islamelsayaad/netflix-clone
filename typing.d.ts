export interface Movie{
  backdrop_path: string, 
  genre_ids:number[],
  id: number,
  media_type: string,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number
  poster_path: string,
  release_date: string,
  title: string,
  vote_average: number,
  vote_count: number
}

export interface Genre{
  id: number,
  name: string
}

