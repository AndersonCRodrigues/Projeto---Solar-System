import React from 'react';
import PropTypes from 'prop-types';
import '../style/missionCard.css';

export default class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">{name}</p>
        <article className='info'>
          <div className='yearCountry'>
            <div>
              <span class="material-symbols-outlined">date_range</span>
              <span data-testid="mission-year">{year}</span>
            </div>
            <div>
              <span class="material-symbols-outlined">location_on</span>
              <span data-testid="mission-country">{country}</span>
            </div>
          </div>
          <div className='destino'>
            <span class="material-symbols-outlined">rocket</span>
            <span data-testid="mission-destination" >{destination}</span>
          </div>
        </article>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
