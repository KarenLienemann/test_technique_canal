import PropTypes from 'prop-types'

class FilmModel 
{ 
  constructor(name, popularity, origin_country, vote_count, first_air_date, backdrop_path, original_language, id, vote_average, overview, poster_path)
  {
    this.name = name;
    this.popularity = popularity;
    this.origin_country = origin_country;
    this.vote_count = vote_count;
    this.first_air_date = first_air_date;
    this.backdrop_path = backdrop_path;
    this.original_language = original_language;
    this.id = id;
    this.vote_average = vote_average;
    this.overview = overview;
    this.poster_path = poster_path;
    //this.showFilm();
  }

  showFilm()
  {
    console.log("***");
    console.log(this.name);
    console.log(this.overview);
    console.log(this.original_language);
    console.log(this.vote_average);
    console.log(this.vote_count);
    console.log("***");
  }
}

export default FilmModel;
