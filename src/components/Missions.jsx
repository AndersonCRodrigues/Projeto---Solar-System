import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import '../style/missoes.css';

export default class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <div className='missoes'>
          <Title headline="Missões" />
        </div>
        <section>
          {missions.map((mission) => (<MissionCard
            key={ mission.name }
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
          />))}
        </section>

      </div>
    );
  }
}
