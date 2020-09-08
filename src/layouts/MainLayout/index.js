import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Header from '../../components/Header';

import styles from './styles';

class MainLayout extends PureComponent {
  render() {
    const { children, classes } = this.props;

    return (
      <div className={classes.root}>
        <Header color="transparent" isAuthenticated={false} absolute />
        <main className={classes.main}>
          <div className={classes.content}>
            <div className={classes.toolbar} />
            {children}
          </div>
        </main>
      </div>
    );
  }
}

MainLayout.propTypes = {
  classes: PropTypes.shape().isRequired,
  children: PropTypes.element.isRequired,
};

export default withStyles(styles)(MainLayout);
