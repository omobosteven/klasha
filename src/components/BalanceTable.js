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
  TextField,
  Hidden
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ReactComponent as SearchIcon } from '../assets/search-icon.svg';
import { ReactComponent as CalendarIcon } from '../assets/calendar-icon.svg';

import balanceData from '../assets/balanceData.json';

const useStyle = makeStyles({
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: '40px 0 8px'
  },

  headerTitle: {
    fontSize: '18px',
    fontWeight: 700,
    marginBottom: '5px'
  },

  headerInputsGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignContent: 'space-between'
  },

  textField: {
    flexBasis: '100%',
    marginTop: '15px',

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
    flexBasis: '50%',
    marginTop: '15px',

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
      fontSize: '14px',
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
      paddingTop: '20px',
      fontSize: '14px'
    },

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
    padding: '10px 40px',
    fontSize: '14px',
    backgroundColor: '#FFFFFF',
    color: '#2C665D'
  },

  btnSecondary: {
    borderRadius: '8px',
    backgroundColor: '#3D8F83',
    color: '#FFFFFF',
    fontSize: '14px',
    padding: '6px 40px',
    marginLeft: 'auto',
    marginTop: '15px',

    '&:hover': {
      color: '#3D8F83',
      backgroundColor: '#FFFFFF'
    }
  },

  tableDisplay: {
    display: 'table',
    borderSpacing: 'collapse',
    color: '#2E2E2E',
    fontSize: '16px',
    width: '100%',
    borderLeft: '1px solid rgba(224, 224, 224, 1)',
    borderRight: '1px solid rgba(224, 224, 224, 1)',
    borderRadius: '8px',
    marginBottom: '20px',

    '& > p': {
      display: 'table-row'
    },
    '& > p > span': {
      display: 'table-cell',
      fontWeight: 700,
      backgroundColor: '#F5F5F5',
      padding: '10px',
      width: '30%',
      borderBottom: '1px solid rgba(224, 224, 224, 1)'
    },

    '& > p > span:last-of-type': {
      fontWeight: 'normal',
      width: '70%',
      backgroundColor: '#FFFFFF'
    },

    '& > p:first-of-type > span': {
      borderTop: '1px solid rgba(224, 224, 224, 1)',
      borderRadius: '8px 0 0 0'
    },

    '& > p:first-of-type > span:last-of-type': {
      borderRadius: '0 8px 0 0'
    },

    '& > p:last-of-type > span': {
      borderBottom: '1px solid rgba(224, 224, 224, 1)',
      borderRadius: '0 0 0 8px'
    },

    '& > p:last-of-type > span:last-of-type': {
      borderRadius: '0 0 8px 0'
    }
  },

  '@media (min-width: 620px)': {
    headerInputsGroup: {
      flexDirection: 'row',
      alignItems: 'flex-start'
    },

    btnPrimary: {
      fontSize: '16px'
    }
  },

  '@media (min-width: 780px)': {
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },

    textField: {
      flexBasis: '40%',
      marginRight: '10px'
    },

    datePicker: {
      flexBasis: '35%'
    }
  },

  '@media (min-width: 884px)': {
    header: {
      flexDirection: 'column',
      alignItems: 'flex-start'
    }
  },

  '@media (min-width: 1024px)': {
    header: {
      flexDirection: 'row',
      alignItems: 'center'
    },

    headerInputsGroup: {
      marginLeft: 'auto'
    },

    textField: {
      flexBasis: '42%'
    },

    datePicker: {
      flexBasis: '32%'
    },

    tableHead: {
      '& .MuiTableCell-head': {
        fontSize: '16px'
      }
    },

    tableBody: {
      '& .MuiTableCell-body': {
        fontSize: '18px'
      }
    },

    btnPrimary: {
      padding: '15px 40px',
      fontSize: '18px'
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
    <Box style={{ marginBottom: '20px' }}>
      <header className={classes.header}>
        <h2 className={classes.headerTitle}>Payout table</h2>
        <div className={classes.headerInputsGroup}>
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
              autoOk
            />
          </MuiPickersUtilsProvider>

          <Button
            variant="contained"
            classes={{ root: classes.btn }}
            className={classes.btnSecondary}
          >
            Payout
          </Button>
        </div>
      </header>
      <Hidden xsDown>
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
      </Hidden>
      <Hidden smUp>
        <TableContainer style={{ marginTop: '25px' }}>
          {balance.map((row) => {
            return (
              <div className={classes.tableDisplay} key={row.id}>
                <p>
                  <span>Payout ID</span>
                  <span>{row.payoutID}</span>
                </p>
                <p>
                  <span>Source</span>
                  <span>{row.source}</span>
                </p>
                <p>
                  <span>Date</span>
                  <span>{row.date}</span>
                </p>
                <p>
                  <span>Amount</span>
                  <span>&#36;{row.amount}</span>
                </p>
              </div>
            );
          })}
        </TableContainer>
      </Hidden>
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
