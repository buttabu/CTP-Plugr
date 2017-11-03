import React, { Component } from 'react';
import { LeagueCard } from 'components';

export default class LeagueList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="league-list">
        <h3>Top Leagues in NYC</h3>
        <LeagueCard />
      </div>
    );
  }
}
