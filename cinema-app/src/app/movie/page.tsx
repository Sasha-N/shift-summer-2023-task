'use client'
import styles from './page.module.css'
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
    let style = {
        background: "lightgray 50%",
        backgroundSize: "100% 100%",
    }
    const filmId = params.searchParams.id;
    const { data, error, loading } = useQuery(GET_FILM, { variables: { filmId } });

    if (data) {

        card.id = data.getFilm.film.id;
        card.genre = data.getFilm.film.genres[0];
        card.release = data.getFilm.film.releaseDate;
        card.description = data.getFilm.film.description;
        card.path = "https://shift-backend.onrender.com" + data.getFilm.film.img;
        card.name = data.getFilm.film.name;
        card.original_name = data.getFilm.film.originalName;
        card.imdb = data.getFilm.film.userRatings.imdb;
        card.kinopoisk = data.getFilm.film.userRatings.kinopoisk;

        style = {
            background: "url(" + card.path + ")" + ", lightgray 50% / cover no-repeat",
            backgroundSize: "100% 100%",
        }
    }


    return <div className={styles.container}>
        <div className={styles.container_card}>
            <div className={styles.cover} style={style}></div>
            <p className={styles.original_name}>в прокате</p>
            <p className={styles.name}>с 1 по 19 июня</p>
        </div>
        <div className={styles.description}>
                <p className={styles.title}>{card.name}</p>
                <p className={styles.original_name}>{card.genre}</p>
                <p className={styles.rating}>IMDB: {card.imdb}</p>
                <p className={styles.rating}>Kinopoisk - {card.kinopoisk}</p>
                <p className={styles.full_description}>{card.description}</p>
        </div>
    </div>
}
