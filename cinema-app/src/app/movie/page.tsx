'use client'
import { gql, useQuery } from "@apollo/client";

interface filmCard { 
    id: string,
    genre: string, 
    release: string, 
    path: string, 
    name: string, 
    original_name: string, 
    imdb: string, 
    kinopoisk: string,
    description?: ''
 }

const GET_FILM = gql`query($filmId: String!) {
        getFilm(filmId: $filmId) {
    film {
      actors {
        fullName,
        id,
professions
      },
ageRating,
country {
  code,
code2,
id,
name,
},
description,
directors {
  fullName,
id,
professions
},
genres,
id,
img,
name,
originalName,
releaseDate,
runtime,
userRatings {
  imdb,
kinopoisk
}    
    },
reason,
success,
}
}`

export default function Movie(params: any) {
    const filmId = params.searchParams.id;
    const { data, error, loading } = useQuery(GET_FILM, { variables: { filmId } });
    if (data) {
      console.log(data.getFilm)
      let card: filmCard = {
        id: '',
        genre: '', 
        release: '', 
        path: '', 
        name: '', 
        original_name: '', 
        imdb: '', 
        kinopoisk: '',
        description: ''
      };

      card.id = data.getFilm.film.id;
      card.genre = data.getFilm.film.genres[0];
      card.release = data.getFilm.film.releaseDate;
      card.description = data.getFilm.film.description;
      card.path = "https://shift-backend.onrender.com" + data.getFilm.film.img;
      card.name = data.getFilm.film.name;
      card.original_name = data.getFilm.film.originalName;
      card.imdb = data.getFilm.film.userRatings.imdb;
      card.kinopoisk = data.getFilm.film.userRatings.kinopoisk;
      console.log(card)
    }
    
    return <><p>{params.searchParams.id}</p>
    </>
}
