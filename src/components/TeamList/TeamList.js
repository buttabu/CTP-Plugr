import React, { Component } from 'react';
import { TeamCard } from 'components';

export default class TeamList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const league = "City League";

    return (
      <div className="team-list">
        <h2>Top Teams in {league}</h2>
        <TeamCard />
      </div>
    );
  }
}
