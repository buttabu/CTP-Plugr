import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Alert from 'react-bootstrap/lib/Alert';
import Helmet from 'react-helmet';

import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
import { push } from 'react-router-redux';
import config from 'config';
import { asyncConnect } from 'redux-connect';

@asyncConnect([
  {
    promise: async ({ store: { dispatch, getState } }) => {
      if (!isAuthLoaded(getState())) {
        await dispatch(loadAuth());
      }
    }
  }
])

@connect(
  state => ({
    user: state.auth.user
  }),
  { logout, pushState: push }
)

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    router: PropTypes.shape({
      location: PropTypes.object
    }).isRequired,
    user: PropTypes.shape({
      email: PropTypes.string
    }),
    notifs: PropTypes.shape({
      global: PropTypes.array
    }).isRequired,
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  };

  static defaultProps = {
    user: null
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      const redirect = this.props.router.location.query && this.props.router.location.query.redirect;
      this.props.pushState(redirect || '/loginSuccess');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState('/');
    }
  }

  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    const { user, children } = this.props;
    const styles = require('./App.scss');

    return (
      <div className={styles.app}>
        <Helmet {...config.app.head} />
        <Navbar fixedTop>

          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/" activeStyle={{ color: '#33e0ff' }}>
                <div className={styles.brand} />
                <span>PLUGR</span>
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>

            <Nav navbar>

              <LinkContainer to="/leagues">
                <NavItem>Leagues</NavItem>
              </LinkContainer>
              
              <LinkContainer to="/teams">
                <NavItem>Teams</NavItem>
              </LinkContainer>
              

              {/* WILL IMPLEMENT THESE TABS WHEN APP IS READY
              {!user && (
                <LinkContainer to="/login">
                  <NavItem>Login</NavItem>
                </LinkContainer>
              )}
              {!user && (
                <LinkContainer to="/register">
                  <NavItem>Register</NavItem>
                </LinkContainer>
              )}

              {user && (
                <LinkContainer to="/logout">
                  <NavItem className="logout-link" onClick={this.handleLogout}>
                    Logout
                  </NavItem>
                </LinkContainer>
              )}
              */}

            </Nav>
            


          </Navbar.Collapse>
        </Navbar>


        <div className={styles.appContent}>
          {children}
        </div>

        {/*
        <div className="well text-center">
          FOOTER
        </div>
        */}

      </div>
    );
  }
}








// OTHER EXAMPLES YOU CAN DO TO NAV BAR
{/*
{user && (
  <p className="navbar-text">
    Logged in as <strong>{user.email}</strong>.
  </p>
)}

<Nav navbar pullRight>
  <NavItem target="_blank" title="View on Github" href="https://github.com/erikras/react-redux-universal-hot-example" >
    <i className="fa fa-github" />
  </NavItem>
</Nav>
*/}
