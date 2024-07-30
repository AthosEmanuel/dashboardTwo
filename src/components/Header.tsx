import React, { useState } from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Header: React.FC = () => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Use o tema corretamente para useMediaQuery
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const pages1 = [
    "PESQUISAS",
    "CRÉDITOS",
    "CAMPANHAS",
    "EQUIPE",
    "CONFIGURAÇÕES",
  ];
  const pages2 = ["ACME Coporation", "nome", "email"];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#000000" }}>
      <Container maxWidth="xl" style={{ backgroundColor: "#000000" }}>
        <Toolbar disableGutters>
          <Typography variant="h6" style={{ marginRight: "30px" }}>
            <Image
              src="/LOGO.svg"
              alt="Logo"
              className="dark:invert"
              width={40}
              height={40}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages1.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              marginRight: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: "2px solid #242528",
                borderRadius: "10px",
                padding: "5px",
                height: "40px",
              }}
            >
              <Typography>
                <Image
                  src="/LOGO2.svg"
                  alt="Logo2"
                  className="dark:invert"
                  width={35}
                  height={35}
                />
              </Typography>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                ACME Coporation
              </Button>
            </div>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "5px",
                height: "50px",
              }}
            >
              <label style={{ color: "#FFFFFF" }}>Adriano Lima</label>
              <div className="subTitle">adriano.lima@acmecorp.com</div>
            </div>
          </Box>

          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: "flex", md: "none" },
                color: "white",
                ml: 1,
                marginLeft: "auto",
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{
            width: 250,
            backgroundColor: "#FFFFFF",
            color: "#8A9099",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 2,
          }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {pages1.map((page) => (
              <ListItem
                button
                key={page}
                sx={{ width: "100%", justifyContent: "center" }}
              >
                <ListItemText primary={page} />
              </ListItem>
            ))}
          </List>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography>
              <Image
                src="/LOGO2.svg"
                alt="Logo2"
                className="dark:invert"
                width={35}
                height={35}
              />
            </Typography>
            <Button sx={{ color: "#000000", mt: 1 }}>ACME Coporation</Button>
          </Box>
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Typography style={{ color: "#FFFFFF" }}>Adriano Lima</Typography>
            <div className="subTitle">adriano.lima@acmecorp.com</div>
          </Box>
          <div style={{ marginTop: "50px" }}>Logout</div>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
