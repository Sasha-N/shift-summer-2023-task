'use client'
import styles from './page.module.css'
import { gql, useQuery } from "@apollo/client";
import Card from './card';

interface filmCard { 
  id: string,
  genre: string, 
  release: string, 
  path: string, 
  name: string, 
  original_name: string, 
  imdb: string, 
  kinopoisk: string }

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


  let cards: filmCard[] = [];
  if (allFilms.data) {
    for (let i = 0; i <  allFilms.data.getCinemaToday.films.length; i++) {

      let card: filmCard = {
        id: '',
        genre: '', 
        release: '', 
        path: '', 
        name: '', 
        original_name: '', 
        imdb: '', 
        kinopoisk: '' 
      };

      card.id = allFilms.data.getCinemaToday.films[i].id;
      card.genre = allFilms.data.getCinemaToday.films[i].genres[0];
      card.release = allFilms.data.getCinemaToday.films[i].releaseDate;
      card.path = "https://shift-backend.onrender.com" + allFilms.data.getCinemaToday.films[i].img;
      card.name = allFilms.data.getCinemaToday.films[i].name;
      card.original_name = allFilms.data.getCinemaToday.films[i].originalName;
      card.imdb = allFilms.data.getCinemaToday.films[i].userRatings.imdb;
      card.kinopoisk = allFilms.data.getCinemaToday.films[i].userRatings.kinopoisk;
      cards.push(card);
    }
  }
  return <>
    <h3 className={styles.title}>АФИША</h3>
    <h4 className={styles.subtitle}><a className={styles.link}>сегодня</a> в прокате</h4>
    <div className={styles.container}>
    {
       cards.map(card => <Card {...card} />)
    }
    </div>
  </>
}