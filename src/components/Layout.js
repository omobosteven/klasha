import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, IconButton } from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { makeStyles } from '@material-ui/styles';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import clsx from 'clsx';
import SideMenu from './SideMenu';

const useStyles = makeStyles({
  menuButton: {
    alignSelf: 'flex-start',
    position: 'fixed',
    padding: '4px',
    backgroundColor: '#3D8F83',
    color: '#FFFFFF',
    zIndex: 6000,
    left: '16px',
    top: '16px',

    '&:hover': {
      backgroundColor: '#3D8F83',
      color: '#FFFFFF'
    }
  },

  sideMenuMobile: {
    position: 'fixed',
    zIndex: 5000
  }
});

const Layout = ({ width, children }) => {
  const classes = useStyles();
  const [hideMenu, setHideMenu] = useState(true);

  const handleMenuButton = () => {
    setHideMenu(!hideMenu);
  };

  useEffect(() => {
    if (width === 'md') {
      setHideMenu(true);
    }
  }, [width]);

  return (
    <Grid container style={{ flexWrap: 'nowrap' }}>
      <Hidden smDown={hideMenu}>
        <Grid
          item
          xs={2}
          style={{
            minWidth: '215px',
            maxHeight: '100vh',
            minHeight: '100vh',
            overflow: 'hidden',
            overflowY: 'auto',
            backgroundColor: '#EAEAEA'
          }}
          className={clsx(
            ['xs', 'sm'].includes(width) && classes.sideMenuMobile,
            classes.sideMenu
          )}
        >
          <SideMenu closeMenuOnClick={handleMenuButton} />
        </Grid>
      </Hidden>
      <Hidden only={['md', 'lg', 'xl']}>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={handleMenuButton}
        >
          {hideMenu ? <MenuRoundedIcon /> : <CloseRoundedIcon />}
        </IconButton>
      </Hidden>
      <Grid item xs style={{ maxHeight: '100vh', overflow: 'hidden', overflowY: 'auto' }}>
        <Box>{children}</Box>
      </Grid>
    </Grid>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired
};

export default withWidth()(Layout);
