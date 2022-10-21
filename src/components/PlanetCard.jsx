import React from 'react';
import PropType from 'prop-types';
import '../style/planetCard.css';

export default class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, tamanho, link } = this.props;
    const length = `${tamanho * 3}px`;
    const imgAlt = `Planeta ${planetName}`;
    return (
      <div data-testid="planet-card">
        <div className='planetImg'>
          <a href={link} target='black'>
            <img id={planetName} src={ planetImage } alt={ imgAlt } width={length}/>
          </a>
        </div>
        <p data-testid="planet-name">{planetName}</p>

      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropType.string.isRequired,
  planetImage: PropType.string.isRequired,
  tamanho: PropType.number.isRequired,
};
