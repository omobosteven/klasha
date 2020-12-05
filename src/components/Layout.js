import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import SideMenu from './SideMenu';

const Layout = ({ children }) => {
  return (
    <Grid container style={{ flexWrap: 'nowrap' }}>
      <Grid item xs={2} style={{ minWidth: '215px' }}>
        <SideMenu />
      </Grid>
      <Grid item xs style={{ maxHeight: '100vh', overflow: 'hidden', overflowY: 'auto' }}>
        <Box>{children}</Box>
      </Grid>
    </Grid>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default Layout;
