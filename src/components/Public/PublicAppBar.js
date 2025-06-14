import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Stack,
  Avatar,
  Typography,
  Box,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";
import {
  Monitor as MonitorIcon,
  MiscellaneousServices as MiscellaneousServicesIcon,
  SupportAgent as SupportAgentIcon,
  Contacts as ContactsIcon,
  AccountTree as AccountTreeIcon,
  Home as HomeIcon,
  Business as BusinessIcon, Factory as FactoryIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
} from "@mui/icons-material";
import { keyframes } from "@emotion/react";
import HomeAppBar from "./HomeAppBar";

const sections = [
  {
    path: "/",
    label: "Home",
    icon: <HomeIcon sx={{ fontSize: "30px" }} />,
    color: "#2ad1be",
  },
  {
    path: "/about",
    label: "About",
    icon: <MonitorIcon sx={{ fontSize: "30px" }} />,
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
              path: "/industries/miny & metall",
              label: "Miny & Metall",
              icon: <BusinessIcon />,
              color: "#d32f2f",
            },
          ],
    },
  {
    path: "/ittech",
    icon: <KeyboardArrowUpIcon />,
    label: "Group of\nCompany",
    icon: <AccountTreeIcon sx={{ fontSize: "30px" }} />,
    color: "#b71c1c",
    children: [
      {
        path: "/ittech/company1",
        label: "Company One",
        icon: <BusinessIcon sx={{ fontSize: "24px" }} />,
        color: "#e53935",
      },
      {
        path: "/ittech/company2",
        label: "Company Two",
        icon: <BusinessIcon sx={{ fontSize: "24px" }} />,
        color: "#d32f2f",
      },
    ],
  },
  {
    path: "/blog",
    label: "Blog",
    icon: <MiscellaneousServicesIcon sx={{ fontSize: "30px" }} />,
    color: "#4caf50",
  },
  {
    path: "/career",
    label: "Career",
    icon: <SupportAgentIcon sx={{ fontSize: "30px" }} />,
    color: "#03a9f4",
  },
  {
    path: "/contact",
    label: "Contact",
    icon: <ContactsIcon sx={{ fontSize: "30px" }} />,
    color: "#cddc39",
  },
];

const slideDown = keyframes`
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const PublicAppBar = () => {
  const { pathname } = useLocation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg")); // xs & sm & md
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const appBarBackgroundColor =
    pathname === "/" ? "transparent" : "#transparent";
  const appBarPosition = pathname === "/" ? "fixed" : "absolute";

  return (
    <>
      <AppBar
        elevation={0}
        position={appBarPosition}
        sx={{
          background: "none",
          top: 0,
          backgroundColor: appBarBackgroundColor,
        }}
      >
        <Toolbar sx={{ pl: "0px !important" }}>
          <Grid container alignItems="center" sx={{ width: "100%" }}>
            <Grid
              item
              xs={2}
              sx={{
                backgroundColor: appBarBackgroundColor,
                borderRadius: "0 0 50px 0",
              }}
            >
              <HomeAppBar />
            </Grid>

            {/* Desktop Navigation - Only for lg and up */}
            {!isSmallScreen && (
              <Grid item xs={10}>
                <Stack
                  sx={{
                    mt: 2,
                    position: "relative",
                    // Responsive adjustments
                    gap: { lg: theme.spacing(7), xl: theme.spacing(7) }, // Default for large screens
                    mr: { lg: 25, xl: 25 }, // Default for large screens
                    // Adjustments for 1024px specifically
                    [theme.breakpoints.between(1024, 1200)]: {
                      gap: theme.spacing(5), // Smaller gap at 1024px
                      mr: 15, // Smaller margin at 1024px
                    },
                    // Adjustments for screens below 1024px
                    [theme.breakpoints.down(1024)]: {
                      gap: theme.spacing(3), // Even smaller gap
                      mr: 0, // No margin
                    },
                  }}
                  direction="row"
                  justifyContent="center"
                >
                  {sections.map(
                    ({ path, label, icon, color, children }, index) => (
                      <Box
                        key={path}
                        onMouseEnter={() => setHoveredMenu(index)}
                        onMouseLeave={() => setHoveredMenu(null)}
                        sx={{ position: "relative" }}
                      >
                        <Stack direction="column" alignItems="center">
                          <Avatar
                            sx={{
                              mb: 1,
                              p: 0.5,
                              backgroundColor: color,
                              boxShadow:
                                pathname === path
                                  ? "-1px 1px 15px 1px #fff"
                                  : "0px",
                              animation: `${slideDown} 0.8s ease-in-out`,
                              cursor: "pointer",
                            }}
                            variant="rounded"
                            component={Link}
                            to={path}
                          >
                            {icon}
                          </Avatar>
                          <Typography
                            variant="body2"
                            sx={{
                              textAlign: "center",
                              color: pathname === "/" ? "#000" : "#fff",
                              whiteSpace: "pre-line",
                              animation: `${slideDown} 0.5s ease-in-out`,
                            }}
                          >
                            {label}
                          </Typography>
                        </Stack>

                        {Array.isArray(children) && hoveredMenu === index && (
                          <Paper
                            elevation={3}
                            sx={{
                              position: "absolute",
                              top: "100%",
                              left: "50%",
                              transform: "translateX(-50%)",
                              mt: 1,
                              px: 2,
                              py: 1,
                              zIndex: 10,
                              minWidth: "180px",
                              backgroundColor: "#fff",
                            }}
                          >
                            <Stack spacing={1}>
                              {children.map(
                                ({
                                  path: childPath,
                                  label: childLabel,
                                  icon: childIcon,
                                  color: childColor,
                                }) => (
                                  <Stack
                                    key={childPath}
                                    direction="row"
                                    spacing={1}
                                    alignItems="center"
                                    component={Link}
                                    to={childPath}
                                    sx={{
                                      textDecoration: "none",
                                      color: "black",
                                      px: 1,
                                      py: 0.5,
                                      borderRadius: 1,
                                      "&:hover": {
                                        backgroundColor: "red",
                                      },
                                    }}
                                  >
                                    <Avatar
                                      sx={{
                                        width: 24,
                                        height: 24,
                                        backgroundColor: childColor,
                                      }}
                                    >
                                      {childIcon}
                                    </Avatar>
                                    <Typography variant="body2">
                                      {childLabel}
                                    </Typography>
                                  </Stack>
                                )
                              )}
                            </Stack>
                          </Paper>
                        )}
                      </Box>
                    )
                  )}
                </Stack>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>

      {/* Mobile/Tablet Navigation - Up to md */}
      {isSmallScreen && (
        <AppBar
          position="fixed"
          sx={{
            top: "auto",
            bottom: 0,
            backgroundColor: "#fff",
            boxShadow: theme.shadows[4],
          }}
        >
          <Toolbar>
            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              sx={{ width: "100%" }}
            >
              {sections.map(({ path, label, icon, color, children }, index) => (
                <Box
                  key={path}
                  onClick={() =>
                    setHoveredMenu(hoveredMenu === index ? null : index)
                  }
                  sx={{ position: "relative", textAlign: "center" }}
                >
                  <Avatar
                    sx={{
                      mb: 0.5,
                      p: 0.5,
                      backgroundColor: color,
                      boxShadow:
                        pathname === path ? "-1px 1px 15px 1px #fff" : "0px",
                      width: 36,
                      height: 36,
                      margin: "0 auto",
                    }}
                    variant="rounded"
                    component={Link}
                    to={path}
                  >
                    {icon}
                  </Avatar>

                  {Array.isArray(children) && hoveredMenu === index && (
                    <Paper
                      elevation={3}
                      sx={{
                        position: "fixed",
                        bottom: "60px",
                        left: 0,
                        right: 0,
                        px: 2,
                        py: 1,
                        zIndex: 10,
                        backgroundColor: "#fff",
                      }}
                    >
                      <Stack spacing={1}>
                        {children.map(
                          ({
                            path: childPath,
                            label: childLabel,
                            icon: childIcon,
                            color: childColor,
                          }) => (
                            <Stack
                              key={childPath}
                              direction="row"
                              spacing={1}
                              alignItems="center"
                              component={Link}
                              to={childPath}
                              sx={{
                                textDecoration: "none",
                                color: "black",
                                px: 1,
                                py: 0.5,
                                borderRadius: 1,
                                "&:hover": {
                                  backgroundColor: "red",
                                },
                              }}
                            >
                              <Avatar
                                sx={{
                                  width: 24,
                                  height: 24,
                                  backgroundColor: childColor,
                                }}
                              >
                                {childIcon}
                              </Avatar>
                              <Typography variant="body2">
                                {childLabel}
                              </Typography>
                            </Stack>
                          )
                        )}
                      </Stack>
                    </Paper>
                  )}
                </Box>
              ))}
            </Stack>
          </Toolbar>
        </AppBar>
      )}

      {/* Spacer to prevent content from being hidden behind the bottom app bar */}
      {isSmallScreen && <Box sx={{ height: "80px" }} />}
    </>
  );
};

export default PublicAppBar;
