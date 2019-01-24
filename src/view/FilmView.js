import React from 'react'
import AccordionItemView from './AccordionItemView';
import './GlobalAccordionView.css';

const FilmView = ({ name, popularity, origin_country, vote_count, first_air_date, backdrop_path, original_language, id, vote_average, overview, poster_path}) => (
	<AccordionItemView title={name}>
	    <p className='filmContentTitle'>
	        Synopsis
	    </p>
	    <p className='filmContent'>
	    	{overview}
	    </p>
	    <p className='filmContentTitle'>
	        Langue Originale
	    </p>
	    <p className='filmContentLangue'>
	        {original_language}
	    </p>
	    <p className='filmContentTitle'>
	        Note Moyenne
	    </p>
	    <p className='filmContent'>
	        {vote_average}
	    </p>
	    <p className='filmContentTitle'>
	        Nombre de Votes
	    </p>
	    <p className='filmContent'>
	        {vote_count}
	    </p>

	</AccordionItemView>
)

export default FilmView;
