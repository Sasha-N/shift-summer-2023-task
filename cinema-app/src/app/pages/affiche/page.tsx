'use client'
import styles from './page.module.css'
import { gql, useQuery } from "@apollo/client";

const GET_FILMS = gql`query getCinemaToday {
  getCinemaToday {
    films {
      actors {
        fullName
        id
        professions
      }
    ageRating
    country {
      code
      code2
      id
      name
    }
    description
    directors {
      fullName
      id
      professions
    }
    genres
    id
    img
    name
    originalName
    releaseDate
    runtime
    userRatings {
      imdb
      kinopoisk
    }
  }
  reason
  success
  }
} 
`

export default function Affiche() {
  const allFilms = useQuery(GET_FILMS);
  let genre = '';
  let release = '';
  let name = '';
  if (allFilms.data) {
    console.log(allFilms.data.getCinemaToday.films)
    genre = allFilms.data.getCinemaToday.films[0].genres[0];
    release = allFilms.data.getCinemaToday.films[0].releaseDate;
    name = allFilms.data.getCinemaToday.films[0].name
  }
  return <>
    <h3 className={styles.title}>АФИША</h3>
    <h4 className={styles.subtitle}><a className={styles.link}>сегодня</a> в прокате</h4>
    <div className={styles.container_card}>
      <div className={styles.label}><p className={styles.genre}>{genre}</p><p className={styles.release}>{release}</p></div>
      <div className={styles.cover}></div>
      <div className={styles.description}>
        <p className={styles.name}>{name}</p>
        <p className={styles.original_name}>{name}</p>
        <p className={styles.rating}>IMDB: {name}</p>
        <p className={styles.rating}>Kinopoisk - {name}</p>
        <button className={styles.detail}>Подробнее</button>
      </div>
    </div>
  </>
}