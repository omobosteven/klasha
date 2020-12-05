import React from 'react';
import { Badge, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ReactComponent as NotificationIcon } from '../assets/notification-icon.svg';
import userPic from '../assets/user-pic.png';

const useStyles = makeStyles({
  sectionHeaderWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '30px'
  },
  sectionHeader: {
    '& h1': {
      margin: 0,
      fontSize: '18px'
    },
    '& span': {
      fontSize: '12px',
      color: '#A6ABB2'
    }
  },
  avatarGroup: {
    display: 'flex',
    alignItems: 'center',

    '& .MuiAvatar-root': {
      width: '50px',
      height: '50px'
    },

    '& .MuiBadge-dot': {
      height: '10px',
      minWidth: '10px',
      borderRadius: '50%'
    }
  },

  notificationIcon: {
    backgroundColor: '#F5F5F5',

    '& svg': {
      fill: '#A6ABB2'
    }
  },

  userProfile: {
    border: '1px solid #FF8377',
    background: 'rgba(255, 131, 119, 0.1)',
    marginLeft: '15px',

    '& img': {
      position: 'absolute',
      right: '12%',
      bottom: '14%'
    }
  }
});

const SectionHeader = () => {
  const classes = useStyles();

  return (
    <header className={classes.sectionHeaderWrapper}>
      <div className={classes.sectionHeader}>
        <h1>Balances</h1>
        <span>Today, 19th October 2020</span>
      </div>
      <div className={classes.avatarGroup}>
        <Badge color="secondary" overlap="circle" variant="dot" badgeContent=" ">
          <Avatar classes={{ root: classes.notificationIcon }}>
            <NotificationIcon />
          </Avatar>
        </Badge>
        <Avatar classes={{ root: classes.userProfile }}>
          <img src={userPic} alt="Profile Picture" />
        </Avatar>
      </div>
    </header>
  );
};

export default SectionHeader;
