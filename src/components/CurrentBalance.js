import React, { useState } from 'react';
import { Grid, Select, Divider, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';

const useStyles = makeStyles({
  gridContainer: {
    maxWidth: '685px',
    border: '1px solid #EBEBEB',
    borderRadius: '10px',
    marginTop: '60px'
  },

  accountBalance: {},

  fundsOnHold: {
    backgroundColor: '#F5F5F5',
    borderRadius: '10px'
  },

  accountBalanceDivider: {
    width: '94%',
    marginLeft: 'auto',
    border: '1px solid #EBEBEB'
  },

  fundsOnHoldDivider: {
    width: '70%',
    marginRight: 'auto',
    border: '1px solid #EBEBEB'
  },

  balanceHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '40px',
    padding: '35px 20px',

    '& .MuiInputBase-root': {
      color: '#2A2A2A'
    },

    '& .MuiSelect-outlined.MuiSelect-outlined': {
      backgroundColor: '#F5F5F5',
      padding: '5px 32px 5px 10px',
      fontSize: '14px'
    },

    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
      borderRadius: '4px'
    }
  },

  headerTitle: {
    fontSize: '14px',
    fontWeight: 'normal',
    margin: 0
  },

  balanceContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '20px 20px'
  },

  balance: {
    margin: 0,
    fontSize: '36px',
    fontWeight: 700
  },

  balanceRate: {
    margin: 0,
    fontSize: '16px',
    color: '#A6ABB2'
  },

  dropDown: {
    '& .MuiPaper-rounded': {
      width: '80%',
      maxWidth: '97px',
      border: '1px solid #EBEBEB',
      boxShadow: 'none',
      marginTop: '38px'
    },

    '& .MuiList-padding': {
      padding: 0
    },

    '& .MuiListItem-root': {
      borderBottom: '1px solid #EBEBEB',
      fontSize: '14px',
      fontWeight: 600
    }
  }
});

const CurrentBalance = () => {
  const classes = useStyles();
  const [currency, setCurrency] = useState('USD');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Grid container classes={{ root: classes.gridContainer }}>
      <Grid item xs={6} classes={{ root: classes.accountBalance }}>
        <header className={classes.balanceHeader}>
          <h2 className={classes.headerTitle} style={{ color: '#2C665D' }}>
            Total account balance
          </h2>
          <Select
            value={currency}
            onChange={handleChange}
            inputProps={{
              name: 'currency',
              id: 'currency-native-simple'
            }}
            variant="outlined"
            IconComponent={KeyboardArrowDownRoundedIcon}
            MenuProps={{
              className: classes.dropDown,
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center'
              },
              transformOrigin: {
                vertical: 'top',
                horizontal: 'center'
              }
            }}
          >
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="KES">KES</MenuItem>
            <MenuItem value="NGN">NGN</MenuItem>
            <MenuItem value="GHC">GHC</MenuItem>
          </Select>
        </header>
        <Divider classes={{ root: classes.accountBalanceDivider }} />
        <div className={classes.balanceContent}>
          <p className={classes.balance}>&#36;5,332.18</p>
          <p className={classes.balanceRate}>1 USD &#61; 381.97 NGN</p>
        </div>
      </Grid>
      <Grid item xs={6} classes={{ root: classes.fundsOnHold }}>
        <header className={classes.balanceHeader}>
          <h2 className={classes.headerTitle}>Funds on hold</h2>
        </header>
        <Divider classes={{ root: classes.fundsOnHoldDivider }} />
        <div className={classes.balanceContent}>
          <p className={classes.balance}>&#36;5,332.18</p>
        </div>
      </Grid>
    </Grid>
  );
};

export default CurrentBalance;
