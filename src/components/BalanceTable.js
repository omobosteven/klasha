import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  InputAdornment,
  TextField
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ReactComponent as SearchIcon } from '../assets/search-icon.svg';
import { ReactComponent as CalendarIcon } from '../assets/calendar-icon.svg';

import balanceData from '../assets/balanceData.json';

const useStyle = makeStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '40px 0 20px'
  },

  headerTitle: {
    flexGrow: '1',
    fontSize: '18px',
    fontWeight: 700
  },

  textField: {
    width: '80%',
    maxWidth: '300px',

    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      backgroundColor: '#FFFFFF'
    },

    '& input': {
      padding: '10px 13px'
    },

    '& input::placeholder': {
      fontSize: '14px'
    },

    '& .MuiSvgIcon-root': {
      fill: '#A6ABB2'
    }
  },

  datePicker: {
    margin: '0 0 0 15px',
    maxWidth: '190px',

    '& .MuiOutlinedInput-root': {
      borderRadius: '8px'
    },

    '& input': {
      padding: '10px 13px',
      fontSize: '14px'
    },

    '& svg': {
      fill: '#2C665D'
    }
  },

  table: {
    width: '99.9%',
    borderCollapse: 'separate',
    borderSpacing: '0 10px'
  },

  tableHead: {
    '& .MuiTableCell-head': {
      fontWeight: 'bold',
      fontSize: '16px',
      backgroundColor: '#F5F5F5',
      padding: '14px 25px',
      borderBottom: 'none',

      '&:first-of-type': {
        borderRadius: '5px 0 0 5px'
      },
      '&:last-of-type': {
        borderRadius: '0 5px 5px 0'
      }
    }
  },

  tableBody: {
    '& .MuiTableCell-body': {
      paddingTop: '30px'
    },

    // '& .MuiTableRow-root': {
    //   height: '70px'
    // },

    '& .MuiTableRow-root:last-of-type .MuiTableCell-body': {
      borderBottom: 'none'
    },

    '& .MuiTableRow-root:hover': {
      backgroundColor: 'rgba(44,102,93,0.2)',
      boxShadow: '0px 2px 30px rgba(0, 0, 0, 0.08)'
    }
  },

  btn: {
    fontSize: '18px',
    boxShadow: 'none',
    borderRadius: '2px',
    textTransform: 'capitalize',
    fontWeight: 700,
    border: '1px solid #EBEBEB',

    '&:hover': {
      boxShadow: 'none'
    }
  },

  btnPrimary: {
    width: '100%',
    padding: '15px 40px',
    backgroundColor: '#FFFFFF',
    color: '#2C665D'
  },

  btnSecondary: {
    borderRadius: '8px',
    backgroundColor: '#2C665D',
    color: '#FFFFFF',
    fontSize: '14px',
    marginLeft: '26px',

    '&:hover': {
      color: '#2C665D',
      backgroundColor: '#FFFFFF'
    }
  }
});

const BalanceTable = () => {
  const classes = useStyle();
  const [balance, setBalance] = useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  useEffect(() => {
    setBalance(balanceData);
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box>
      <header className={classes.header}>
        <h2 className={classes.headerTitle}>Payout table</h2>
        <TextField
          id="standard-search"
          type="search"
          variant="outlined"
          className={classes.textField}
          placeholder="Search something..."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            )
          }}
          value={searchTerm}
          onChange={handleChange}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            classes={{ root: classes.datePicker }}
            variant="inline"
            inputVariant="outlined"
            format="MMMM yyyy"
            margin="normal"
            id="date-picker-inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date'
            }}
            keyboardIcon={<CalendarIcon />}
          />
        </MuiPickersUtilsProvider>

        <Button
          variant="contained"
          classes={{ root: classes.btn }}
          className={classes.btnSecondary}
        >
          Payout
        </Button>
      </header>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead classes={{ root: classes.tableHead }}>
            <TableRow>
              <TableCell align="left">Payout ID</TableCell>
              <TableCell align="left">Source</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody classes={{ root: classes.tableBody }}>
            {balance.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.payoutID}</TableCell>
                <TableCell>{row.source}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>&#36;{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        classes={{ root: classes.btn }}
        className={classes.btnPrimary}
      >
        See more
      </Button>
    </Box>
  );
};

export default BalanceTable;
