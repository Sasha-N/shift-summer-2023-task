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
  if (allFilms.data){
    console.log(allFilms.data)
  }
  return <>
    <h3 className={styles.title}>АФИША</h3>
    <h4 className={styles.subtitle}><a className={styles.link}>сегодня</a> в прокате</h4>
  </>
}