import FilmModel from './FilmModel';

class BaseModel 
{ 
  constructor(table)
  {
    this.table = table;
    this.filmArray = [];
  }

  parse()
  {
    if (Object.keys(this.table).includes("results"))
    {
      console.log(this.table["results"]);
      for (var i=0; i<this.table["results"].length; i++)
      {
        var data = this.table["results"][i];

        var name;
        if(data["title"])
        {
          name = data["title"];
        }
        else
        {
          name = data["name"];
        }
        var overview = data["overview"];
        var backdrop_path = data["backdrop_path"]
        var first_air_date = data["first_air_date"];
        var id = data["id"];
        var origin_country = data["origin_country"];
        var original_language = data["original_language"];
        var popularity = data["popularity"];
        var poster_path = data["poster_path"];
        var vote_average = data["vote_average"];
        var vote_count = data["vote_count"];

        var filmModel = new FilmModel(name, popularity, origin_country, vote_count, first_air_date, backdrop_path, original_language, id, vote_average, overview, poster_path);
        this.filmArray.push(filmModel);
      }
    }
    return this.filmArray;
  }
}

export default BaseModel;
