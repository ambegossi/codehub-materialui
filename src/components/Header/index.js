import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';

import brand from '../../assets/images/brand.png';

import styles from './styles';

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();

  const { color, fixed, absolute, isAuthenticated } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
  });

  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          <Link to="/">
            <img
              width="150"
              src={brand}
              alt="CodeHub"
              className={classes.brand}
            />
          </Link>
        </div>
        <div className={classes.buttons}>
          {isAuthenticated ? (
            <Button variant="contained" color="secondary">
              Logout
            </Button>
          ) : (
            <>
              <Button variant="contained" color="secondary">
                Login
              </Button>
              <Button variant="contained" color="primary">
                Cadastre-se
              </Button>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf(['primary', 'transparent']),
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
};

Header.defaultProps = {
  color: 'transparent',
  fixed: false,
  absolute: false,
  isAuthenticated: false,
};
