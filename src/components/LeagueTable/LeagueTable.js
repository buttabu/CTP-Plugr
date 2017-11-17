import React, { Component } from 'react';
import { Link } from 'react-router';
// import {  } from 'components';

export default class LeagueTable extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="league-table table-responsive">
        <h2>League Rankings</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover">
            <colgroup>
              <col id="team-name-col"/>
              <col id="games-played-col"/>
              <col id="wins-col"/>
              <col id="ties-col"/>
              <col id="losses-col"/>
              <col id="goals-for-against-col"/>
              <col id="goal-differential-col"/>
              <col id="points-col"/>
            </colgroup>
            <thead>
              <tr>
                <th>Team Name</th>
                <th>Games Played</th>
                <th>Wins</th>
                <th>Ties</th>
                <th>Losses</th>
                <th>+ / -</th>
                <th>Goal Differential</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CCNY Ballers</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>1.0</td>
                <td>1.0</td>
                <td>55</td>
              </tr>
              <tr>
                <td>CCNY Ballers</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>1.0</td>
                <td>1.0</td>
                <td>55</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
    );
  }
}
