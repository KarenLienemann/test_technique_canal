import React, { Component } from 'react';
import './HeadView.css';

class HeadView extends Component 
{
	render() 
	{
  	return (
    		<div>
      		<header>
            <p className="Head">
		       	  Test Technique - Développeur Front End 
            </p> 	
            <p className="Head-body">
                > Karen LIENEMANN
                <br/> karen.lienemann@hotmail.com
            </p>	    	 
      		</header>
        </div>
  	)
  }
}

export default HeadView;
