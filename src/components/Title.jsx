import React from 'react';
import PropType from 'prop-types';

export default class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>{headline}</h2>
    );
  }
}

Title.propTypes = {
  headline: PropType.string.isRequired,
};
