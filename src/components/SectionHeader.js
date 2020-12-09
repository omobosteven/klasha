import React from 'react';
import { Badge, Avatar, IconButton, Hidden } from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { ReactComponent as NotificationIcon } from '../assets/notification-icon.svg';
import userPic from '../assets/user-pic.png';

const useStyles = makeStyles({
  menuButton: {
    marginRight: '15px',
    padding: '4px',
    backgroundColor: '#3D8F83',
    color: '#FFFFFF',

    '&:hover': {
      backgroundColor: '#3D8F83',
      color: '#FFFFFF'
    }
  },

  sectionHeaderWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px'
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
    marginLeft: 'auto',

    '& .MuiAvatar-root': {
      width: '40px',
      height: '40px'
    },

    '& .MuiBadge-dot': {
      height: '8px',
      minWidth: '8px',
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
      right: '3%',
      bottom: '4%'
    }
  },

  '@media (min-width: 620px)': {
    avatarGroup: {
      '& .MuiAvatar-root': {
        width: '50px',
        height: '50px'
      },

      '& .MuiBadge-dot': {
        height: '10px',
        minWidth: '10px'
      }
    },

    userProfile: {
      '& img': {
        right: '12%',
        bottom: '14%'
      }
    }
  },

  '@media (min-width: 884px)': {
    sectionHeaderWrapper: {
      marginTop: '30px'
    }
  }
});

const SectionHeader = ({ handleMenuButton, title }) => {
  const classes = useStyles();

  return (
    <header className={classes.sectionHeaderWrapper}>
      <Hidden only={['md', 'lg', 'xl']}>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={handleMenuButton}
        >
          <MenuRoundedIcon />
        </IconButton>
      </Hidden>
      <div className={classes.sectionHeader}>
        <h1>{title}</h1>
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

SectionHeader.propTypes = {
  handleMenuButton: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default SectionHeader;
