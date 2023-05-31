import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import useScrollListener from "./hook/useScrollListener";

const TitleText = ({
  flexGrow = 0,
  variant = "h6",
  display = { xs: "none", md: "flex" },
}) => (
  <Typography
    variant={variant}
    noWrap
    component="a"
    href="/"
    sx={{
      mr: 2,
      display,
      fontWeight: 700,
      flexGrow: flexGrow,
      color: "inherit",
      letterSpacing: ".3rem",
      textDecoration: "none",
    }}
    paddingLeft={2}
  >
    Be Wonder - Insurance
  </Typography>
);

const Logo = ({ sx = { display: { xs: "none", md: "flex" } } }) => (
  <Avatar
    alt="Be Wonder - Insurance"
    src="/logo.png"
    sx={sx}
    variant="square"
  />
);

function ResponsiveAppBar() {
  const scroll = useScrollListener();
  const [navClassList, setNavClassList] = React.useState([]);

  React.useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return (
    <AppBar className={navClassList.join(" ")}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <TitleText />
          <Logo sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

          <TitleText
            variant="h5"
            display={{ xs: "flex", md: "none" }}
            flexGrow={1}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Solicita tu cotización">
              <Button variant="contained" color="secondary">
                Cotizar
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
