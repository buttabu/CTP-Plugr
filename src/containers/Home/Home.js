import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import config from 'config';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

export default class Home extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const styles = require('./Home.scss');
    
    return (
      <div className={styles.home}>
        <Helmet title="Home" />

        PLUGR HOME

      </div>
    );
  }
}

