import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LeagueTable, TeamList } from 'components';

class TeamProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="team-profile container">
        <Helmet title="Team Name" />
        <div className="jumbotron">
          <h1>Hello, World</h1>
          <p>
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
          </p>
          <p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>
        <div className="profile-card">
          <img src="placehold.it/1280x200" alt="" className="cover-photo"/>
          <img src="placehold.it/180x180" alt="" className="profile-photo thumbnail"/>
          <div className="profile-bio">
            <h1>Team Name</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor elementum malesuada. In sed vehicula dolor. Aenean eu odio turpis. Pellentesque porttitor ultricies luctus. Fusce porta est eu orci facilisis, eget venenatis felis scelerisque. Vestibulum at semper erat, in euismod mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. In non orci lacus.
            </p>
          </div>
        </div>
        <span>Team Profile Here</span>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ }, dispatch)
});

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamProfile);
