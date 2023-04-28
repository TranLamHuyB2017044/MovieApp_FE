import { defineStore } from 'pinia';
import MovieService from "../services/movie.service";

export const useFilmStore = defineStore("film", {
    state: () => ({ films: [], searchFilm: [] }),
    getters: {},
    actions: {
      async getAllFilms() {
        try {
          this.films = await MovieService.getAll();
        } catch (err) {
          console.log(err);
        }
      },
      getSearchFilm(textSearch) {
          this.searchFilm=[]
        for (let i = 0; i < this.films.length; i++) {
      
          var film = this.films[i];
          if (film.name.toLowerCase().includes(textSearch.toLowerCase()))
            this.searchFilm.push(this.films[i]);
        }
      },
    },
  });
  