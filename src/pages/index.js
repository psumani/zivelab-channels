import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Snackbar from '@material-ui/core/Snackbar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CloseIcon from '@material-ui/icons/Close';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import MenuIcon from '@material-ui/icons/Menu';
import TabletIcon from '@material-ui/icons/Tablet';

import { getLocalIPAddress, getFullRange, isZiveDevice } from '../utilities/utilities.js';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  badgeMargin: {
    margin: theme.spacing.unit * 2,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class Index extends React.Component {
  state = {
    openDrawer: false,
    openSnackbar: false,
    snackbarMessage: "",
    
    localIP: null,
    localDevices: [],
    remoteDevices: [],

    scanDevices: false,
    isLocalScan: false,
    isRemoteScan: false,
    scanCompleted: 0,
    scanTotal: 0,
  };

  handleDrawerOpen = () => {
    this.setState({ openDrawer: true });
  };

  handleDrawerClose = () => {
    this.setState({ openDrawer: false });
  };

  handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ openSnackbar: false });
  };

  handleLocalClick = () => {
    this.findDevices(true);
  };

  handleRemoteClick = () => {
    this.findDevices(false);
  };

  async findDevices (isLocal) {
    try {
      const message = (isLocal) ? "Scanning local devices..." : "Scanning remote devices...";
      this.setState({ openSnackbar: true, snackbarMessage: message });
      if (!isLocal && !this.state.localIP) {
        await this.getLocalIPAddressAsync();
      }
      const baseIP = (isLocal) ? "169.254.17.1" : this.state.localIP;
      const scanDevices = getFullRange(baseIP);
      this.setState({ isLocalScan: isLocal, isRemoteScan: !isLocal, scanCompleted: 0, scanTotal: scanDevices.length });
      (scanDevices).map(async (ip) => {
        await this.loadAboutAsync(ip);
      });
    } catch (e) {
      console.log(e);
    }
  };

  async getLocalIPAddressAsync () {
    try {
      const ip = await getLocalIPAddress();
      if (ip) {
        this.setState({
          localIP: ip,
        });
      }; 
    } catch (e) {
      console.log(e);
    }
  };

  async loadAboutAsync (ip) {
    // ip should be a valid IP address.
    const isLocal = (ip.split('.').slice(0, 1) === "169");
    try {
      const aboutURL = 'http://' + ip + '/about';
      const aboutRequest = new Request(aboutURL);
			const aboutFetch = await fetch(aboutRequest);
      const aboutJson = await aboutFetch.json();
			if (aboutJson) {
        if (!isZiveDevice(aboutJson.MacAddress)) return;
        const validDevice = {
          "name": aboutJson.Model,
          "serialNumber": aboutJson.SerialNumber,
          "ipAddress": ip, //aboutJson.IPAddress,
          "macAddress": aboutJson.MacAddress,
        };
        if (isLocal && this.state.localDevices.filter(device => device.ipAddress === ip).length <= 0) {
          this.setState({ 
            localDevices: [ ...this.state.localDevices, validDevice ], 
          });
        } else if (!isLocal && this.state.remoteDevices.filter(device => device.ipAddress === ip).length <= 0) {
          this.setState({ 
            remoteDevices: [ ...this.state.remoteDevices, validDevice ], 
          });	
        }
			}
		} catch (e) {
      console.log(e);
      if (isLocal) {
        const invalidDevice = this.state.localDevices.filter(device => device.ipAddress === ip);
        this.setState({ localDevices : this.state.localDevices.filter(function(device) {
          return device !== invalidDevice
        })});
      } else {
        const invalidDevice = this.state.remoteDevices.filter(device => device.ipAddress === ip);
        this.setState({ remoteDevices : this.state.remoteDevices.filter(function(device) {
          return device !== invalidDevice
        })});
      }
		} finally {
      this.setState({ scanCompleted: this.state.scanCompleted + 1 });
    }
  };

  ScanProgress (disabled=false, value=0) {
    if (disabled) {
      return (
        <React.Fragment/>
      )      
    } else {
      return (
        <React.Fragment>
          <LinearProgress
            variant="determinate"
            value={value}
            color="secondary"
          />
        </React.Fragment>
      )
    }
  };

  ListDevices (devices) {
    if (devices) {
      return (
        devices.map(device => (
          <React.Fragment>
            <Divider/>
            <ListItem button key={device.ipAddress}>
              <ListItemIcon>
                <TabletIcon/>
              </ListItemIcon>
              <ListItemText primary={device.ipAddress} />
            </ListItem>
          </React.Fragment>
        ))
      )
    } else {
      return (
        <React.Fragment/>
      )  
    }
  };

  render() {
    const { classes, theme } = this.props;
    const { openDrawer, openSnackbar, snackbarMessage } = this.state;
    const { localIP, localDevices, remoteDevices } = this.state;
    const { isLocalScan, isRemoteScan, scanCompleted, scanTotal } = this.state;
    
    // progress in scanning
    const isScanning = scanTotal > 0 && scanCompleted < scanTotal;
    const completed = (isScanning) ? scanCompleted * 100 / scanTotal : 0;
    console.log(scanCompleted + "/" + scanTotal);
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: openDrawer,
          })}
        >
          <Toolbar disableGutters={!openDrawer}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, openDrawer && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              ZiveLab Channels v0.1.0
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={openDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider/>

          <List key="local-devices">
            <ListItem button key="local-devices-nav" onClick={this.handleLocalClick} disabled={isScanning}>
              <ListItemIcon>
                <DeviceHubIcon/>
              </ListItemIcon>
              <ListItemText primary="My Devices" />
            </ListItem>
            {this.ScanProgress(!isLocalScan || !isScanning, completed)}
            {this.ListDevices(localDevices)}   
          </List>          
          <Divider/>
          <List key="remote-devices"> 
            <ListItem button key="remote-devices-nav" onClick={this.handleRemoteClick} disabled={isScanning}>
              <ListItemIcon>
                <DeviceHubIcon/>
              </ListItemIcon>
              <ListItemText primary="Remote Devices" secondary={localIP}/>
            </ListItem>     
            {this.ScanProgress(!isRemoteScan || !isScanning, completed)}
            {this.ListDevices(remoteDevices)}            
          </List>
          <Divider/>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: openDrawer,
          })}
        >
          <div className={classes.drawerHeader} />
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
            elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
            hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
            Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
            viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
            Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
            at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
            ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus
            sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
            In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
            et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique
            sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo
            viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography>
        </main>
        <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={openSnackbar}
            autoHideDuration={2000}
            onClose={this.handleSnackbarClose}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{snackbarMessage}</span>}
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                className={classes.close}
                onClick={this.handleSnackbarClose}
              >
                <CloseIcon />
              </IconButton>,
            ]}
          />
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles, { withTheme: true })(Index));
