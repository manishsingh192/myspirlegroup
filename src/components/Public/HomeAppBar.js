import React, { useEffect, useState } from 'react';
import { 
  Box, 
  Stack, 
  Divider, 
  IconButton, 
  Typography, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon,
  Collapse,
  Avatar,
  useMediaQuery
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useTheme } from '@mui/material/styles';
import Logo from '../../assets/images/spirale_logo.png';
import { Link, useLocation } from 'react-router-dom';
import {
  Monitor as MonitorIcon,
  MiscellaneousServices as MiscellaneousServicesIcon,
  SupportAgent as SupportAgentIcon,
  Contacts as ContactsIcon,
  AccountTree as AccountTreeIcon,
  Home as HomeIcon,
  Business as BusinessIcon,
  ExpandLess, Factory as FactoryIcon,
  ExpandMore
} from '@mui/icons-material';

const sections = [
  {
    path: "/",
    label: "Home",
    icon: <HomeIcon />,
    color: "#2ad1be",
  },
  {
    path: "/about",
    label: "About",
    icon: <MonitorIcon />,
    color: "#ffeb3b",
  },
  {
    path:"/industries",
    label:"Industries",
    icon: <FactoryIcon />
,
    color: "#86236d",
    children: [
      {
        path: "/industries/automobile",
        label: "Automobile",
        icon: <BusinessIcon />,
        color: "#e53935",
      },
      {
        path: "/industries/aerospace",
        label: "Aerospace",
        icon: <BusinessIcon />,
        color: "#d32f2f",
      },
      {
                    path: "/industries/information technology",
                    label: "Information Technology",
                    icon: <BusinessIcon />,
                    color: "#d32f2f",
                  },

      {
        path: "/industries/telecommunication",
        label: "Telecommunication",
        icon: <BusinessIcon />,
        color: "#d32f2f",
      },
      
      {
        path: "/industries/infrastructure",
        label: "Infrastructure",
        icon: <BusinessIcon />,
        color: "#d32f2f",
      },
      {
        path: "/industries/power & energy",
        label: "Power & energy",
        icon: <BusinessIcon />,
        color: "#d32f2f",
      },
    ],
  },
  {
    path: "/ittech",
    label: "Group of Company",
    icon: <AccountTreeIcon />,
    color: "#b71c1c",
    children: [
      {
        path: "/ittech/company1",
        label: "Company One",
        icon: <BusinessIcon />,
        color: "#e53935",
      },
      {
        path: "/ittech/company2",
        label: "Company Two",
        icon: <BusinessIcon />,
        color: "#d32f2f",
      },
    ],
  },
  {
    path: "/blog",
    label: "Blog",
    icon: <MiscellaneousServicesIcon />,
    color: "#4caf50",
  },
  {
    path: "/career",
    label: "Career",
    icon: <SupportAgentIcon />,
    color: "#03a9f4",
  },
  {
    path: "/contact",
    label: "Contact",
    icon: <ContactsIcon />,
    color: "#cddc39",
  },
];

const HomeAppBar = () => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [showElements, setShowElements] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElements(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
    setIsMenuOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setIsMenuOpen(false);
    setExpandedMenu(null);
  };

  const handleIconClick = () => {
    if (isMenuOpen) {
      handleDrawerClose();
    } else {
      handleDrawerOpen();
    }
  };

  const handleMenuExpand = (index) => {
    if (expandedMenu === index) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(index);
    }
  };

  return (
    <>
      <Box
        sx={{
          boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.3)',
          width: 230,
          height: 80,
          borderBottomRightRadius: '45px',
          opacity: showElements ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
          bgcolor: "#fff",
        }}
      >
        <Stack direction="row" alignItems="center">
          <img
            src={Logo}
            alt="Logo"
            height="52px"
            width="80px"
            style={{
              padding: '0px 20px',
              objectFit: 'cover',
              cursor: 'pointer',
            }}
            onClick={() => window.location.href = '/'}
          />

          <Divider orientation="vertical" flexItem sx={{ height: 80 }} />
          <Stack direction="column" alignItems="center" sx={{ pl: 4 }}>
            <IconButton
              onClick={handleIconClick}
              sx={{
                cursor: 'pointer',
                transition: 'transform 0.3s ease-in-out',
                transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)'
              }}
            >
              {isMenuOpen ? (
                <CloseRoundedIcon fontSize="large" />
              ) : (
                <MenuRoundedIcon fontSize="large" />
              )}
            </IconButton>
            {isMenuOpen ? (
              <Typography variant="body1" color={'#000'}>Close</Typography>
            ) : (
              <Typography variant="body1" color={'#000'}>Menu</Typography>
            )}
          </Stack>
        </Stack>
      </Box>

      {/* Drawer Component */}
      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
            top: 0,
            color: 'grey',
            height: '100%',
            borderTopRightRadius: '6px',
            borderBottomRightRadius: '6px',
            backgroundColor: theme.palette.background.default,
            opacity: open ? 1 : 0,
            transition: theme.transitions.create('opacity', {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.short,
            }),
          },
        }}
      >
        <List>
          {sections.map((section, index) => (
            <React.Fragment key={section.path}>
              <ListItem
                button
                component={section.children ? 'div' : Link}
                to={section.children ? undefined : section.path}
                onClick={
                  section.children 
                    ? () => handleMenuExpand(index)
                    : handleDrawerClose
                }
                sx={{
                  gap: '16px',
                  backgroundColor: pathname === section.path ? theme.palette.action.selected : 'inherit',
                }}
              >
                <ListItemIcon sx={{ minWidth: '36px' }}>
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30,
                      backgroundColor: section.color,
                    }}
                  >
                    {section.icon}
                  </Avatar>
                </ListItemIcon>
                <ListItemText
                  primary={section.label}
                  primaryTypographyProps={{
                    sx: { 
                      fontSize: '0.9rem', 
                      color: 'black',
                      fontWeight: pathname === section.path ? 'bold' : 'normal'
                    }
                  }}
                />
                {section.children && (
                  expandedMenu === index ? <ExpandLess /> : <ExpandMore />
                )}
              </ListItem>

              {section.children && (
                <Collapse in={expandedMenu === index} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {section.children.map((child) => (
                      <ListItem
                        key={child.path}
                        button
                        component={Link}
                        to={child.path}
                        onClick={handleDrawerClose}
                        sx={{
                          pl: 6,
                          gap: '16px',
                          backgroundColor: pathname === child.path ? theme.palette.action.selected : 'inherit',
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: '36px' }}>
                          <Avatar
                            sx={{
                              width: 24,
                              height: 24,
                              backgroundColor: child.color,
                            }}
                          >
                            {child.icon}
                          </Avatar>
                        </ListItemIcon>
                        <ListItemText
                          primary={child.label}
                          primaryTypographyProps={{
                            sx: { 
                              fontSize: '0.8rem', 
                              color: 'black',
                              fontWeight: pathname === child.path ? 'bold' : 'normal'
                            }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default HomeAppBar;