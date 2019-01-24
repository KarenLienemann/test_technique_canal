import React, { Component } from 'react';
import Select from 'react-select';
import HeadView from './HeadView'
import AllFilmsView from './AllFilmsView'
import AccordionView from './AccordionView'
import './IndexView.css';
import './GlobalAccordionView.css';

class AppView extends Component 
{
  constructor(props)
  {
    super();
    this.props = props;
    this.handleChange = this.handleChange.bind(this);
    this.state = {selectedOption: null};
  }

  handleChange = (e) => {
    this.setState( {selectedOption: e.value});
    console.log(`Option selected:`, e.value);
  }

	render() 
	{
    const options = [
      { value: this.props.filmArray, label: 'Films' },
      { value: this.props.serieArray, label: 'Séries' }
    ];
    const { selectedOption } = this.state;

  	return (
      <div>
        <HeadView />
        <Select className='select' placeholder="Cliquer pour sélectionner une base de données" value={selectedOption} onChange={this.handleChange} options={options}/>
        <AccordionView atomic={true}> 
          <AllFilmsView array={selectedOption} />
        </AccordionView>
      </div>
  	)
  }
}

export default AppView;



