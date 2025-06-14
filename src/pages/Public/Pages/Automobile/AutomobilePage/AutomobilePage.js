import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import {
    AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton,
    ListItemText, Toolbar, Typography, Button, Menu, MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppTheme from '../../../../../themes/AppTheme';
import { Link } from 'react-router-dom';

const navItems = [
    { label: 'Home', path: '/automobilepage' },
    { label: 'About Us', path: '/automobilepage/about' },
    { label: 'Industry' },
    { label: 'Career', path: '/automobilepage/career' },
    { label: 'Contact', path: '/automobilepage/contact' },
];

const dropdownItems = [
    { label: 'Telecom', path: '/automobilepage/telecom' },
    { label: 'Coal', path: '/automobilepage/coal' },
    { label: 'Water', path: '/automobilepage/water' },
];

const AutomobilePage = ({ window }) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileAnchorEl, setMobileAnchorEl] = React.useState(null);
    const [activeItem, setActiveItem] = React.useState(localStorage.getItem('activeNavItem') || 'Home');

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);
    const handleMobileMenuOpen = (event) => setMobileAnchorEl(event.currentTarget);
    const handleMobileMenuClose = () => setMobileAnchorEl(null);

    const handleNavItemClick = (item) => {
        setActiveItem(item);
        localStorage.setItem('activeNavItem', item);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    const renderMenuItems = (anchor, handleClose, activeItem, handleNavItemClick) => (
        <Menu
            anchorEl={anchor}
            open={Boolean(anchor)}
            onClose={handleClose}
            PaperProps={{ sx: { width: 140 } }}
            onMouseLeave={handleClose} // Close menu on mouse leave
        >
            {dropdownItems.map((item) => (
                <MenuItem
                    key={item.label}
                    component={Link}
                    to={item.path}
                    onClick={() => {
                        handleClose();
                        handleNavItemClick(item.label);
                    }}
                    sx={{
                        marginBottom: 1,
                        backgroundColor: activeItem === item.label ? '#F3551B' : 'transparent',
                        color: activeItem === item.label ? 'white' : 'black',
                        '&:hover': {
                            backgroundColor: '#F3551B',
                            color: 'white',
                        },
                        fontWeight: 'bold',
                    }}
                >
                    {item.label}
                </MenuItem>
            ))}
        </Menu>
    );

    const renderNavItem = (item, handleMenuOpen, handleMenuClose, activeItem, handleNavItemClick) => (
        item.label === 'Industry' ? (
            <React.Fragment key={item.label}>
                <Button
                    sx={{
                        position: 'relative',
                        backgroundColor: 'transparent',
                        color: activeItem === item.label ? '#F3551B' : 'black',
                        mx: 1,
                        '&:hover': {
                            backgroundColor: 'transparent',
                            color: '#F3551B',
                        },
                        fontWeight: 'bold',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: activeItem === item.label ? '100%' : '0%',
                            height: '2px',
                            backgroundColor: '#F3551B',
                            transition: 'width 0.3s',
                        },
                    }}
                    onMouseEnter={handleMenuOpen} // Open menu on hover
                    endIcon={<ArrowDropDownIcon />}
                >
                    {item.label}
                </Button>
                {renderMenuItems(anchorEl, handleMenuClose, activeItem, handleNavItemClick)}
            </React.Fragment>
              ) : (
            <Button
                key={item.label}
                component={Link} // Use Link component for routing
                to={item.path}
                sx={{
                    position: 'relative',
                    backgroundColor: 'transparent',
                    color: activeItem === item.label ? '#F3551B' : 'black',
                    mx: 1,
                    '&:hover': {
                        backgroundColor: 'transparent',
                        color: '#F3551B',
                    },
                    fontWeight: 'bold',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: activeItem === item.label ? '100%' : '0%',
                        height: '2px',
                        backgroundColor: '#F3551B',
                        transition: 'width 0.3s',
                    },
                }}
                onClick={() => handleNavItemClick(item.label)}
            >
                {item.label}
            </Button>
        )
    );

    return (
        <ThemeProvider theme={AppTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar component="nav" sx={{ bgcolor: 'white' }} elevation={0}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon sx={{ color: '#000' }} />
                        </IconButton>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'black' }}
                        >
                            Automobile
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' }, margin: '0 auto' }}>
                            {navItems.map((item) =>
                                renderNavItem(item, handleMenuOpen, handleMenuClose, activeItem, handleNavItemClick)
                            )}
                        </Box>
                        {renderMenuItems(anchorEl, handleMenuClose, activeItem, handleNavItemClick)}
                    </Toolbar>
                </AppBar>
                <nav>
                    <Drawer
                        container={container}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{ keepMounted: true }}
                        sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 } }}
                    >
                        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                            <Typography variant="h5" sx={{ my: 2 }}>
                                Automobile
                            </Typography>
                            <Divider />
                            <List>
                                {navItems.map((item) => (
                                    <React.Fragment key={item.label}>
                                        <ListItem disablePadding>
                                            <ListItemButton
                                                sx={{
                                                    textAlign: 'center',
                                                    backgroundColor: 'transparent',
                                                    color: activeItem === item.label ? '#F3551B' : 'black',
                                                    fontWeight: 'bold',
                                                    '&:hover': {
                                                        backgroundColor: 'transparent',
                                                        color: '#F3551B',
                                                    },
                                                    '&::after': {
                                                        content: '""',
                                                        position: 'absolute',
                                                        bottom: 0,
                                                        left: '50%',
                                                        transform: 'translateX(-50%)',
                                                        width: activeItem === item.label ? '100%' : '0%',
                                                        height: '2px',
                                                        backgroundColor: '#F3551B',
                                                        transition: 'width 0.3s',
                                                    },
                                                }}
                                                component={Link}
                                                to={item.path}
                                                onClick={item.label === 'Industry' ? handleMobileMenuOpen : () => handleNavItemClick(item.label)}
                                            >
                                                <ListItemText primary={item.label} />
                                                {item.label === 'Industry' && <ArrowDropDownIcon />}
                                            </ListItemButton>
                                        </ListItem>
                                        {item.label === 'Industry' && renderMenuItems(mobileAnchorEl, handleMobileMenuClose, activeItem, handleNavItemClick)}
                                    </React.Fragment>
                                ))}
                            </List>
                        </Box>
                    </Drawer>
                </nav>
            </Box>
        </ThemeProvider>
    );
}

AutomobilePage.propTypes = {
    window: PropTypes.func,
};

export default AutomobilePage;
