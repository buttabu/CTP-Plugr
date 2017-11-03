import React, { Component } from 'react';
import { Link } from 'react-router';
import { RenderSubmitButton } from '../RenderForm/RenderForm';
// import {  } from 'components';

export default class LeagueList extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="col-md-6">
        <div className="league-card panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title"> League Name </h3>
          </div>
          <div className="panel-body">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            <Link to="#">
              <RenderSubmitButton outerGroupClassName="" buttonClassName="" onClick="" label="" />
            </Link>
          </div>
        </div>
      </div>
      
    );
  }
}
