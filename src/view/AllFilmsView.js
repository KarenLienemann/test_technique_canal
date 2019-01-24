import React from 'react';
import FilmView from './FilmView'

function AllFilmsView(props) 
{
	var rows = [];
    if (props.array)
    {
        for (var i=0; i<props.array.length; i++) 
        {
            var data = props.array[i];
            rows.push(<FilmView 
                name={data.name} 
                overview={data.overview} 
                popularity={data.popularity}
                origin_country={data.origin_country}
                vote_count={data.vote_count}
                first_air_date={data.first_air_date}
                backdrop_path={data.backdrop_path}
                original_language={data.original_language}
                id={data.id}
                vote_average={data.vote_average}
                poster_path={data.poster_path}
                />);
        } 
    }
    return rows;
}

export default AllFilmsView;

