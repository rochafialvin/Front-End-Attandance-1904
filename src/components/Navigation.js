import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { md: "flex" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
            <Button
              component={Link}
              to="/register"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Register
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navigation;
