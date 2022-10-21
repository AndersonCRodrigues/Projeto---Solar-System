import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';
import '../style/solarSystem.css';

export default class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <div className='planetas'>
          <Title headline="Planetas" />
        </div>
        <div className='planetsCards'>
          {planets.map((planet) => (<PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
            tamanho={ planet.tamanho }
            link={planet.link}
          />))}
        </div>
      </div>
    );
  }
}
