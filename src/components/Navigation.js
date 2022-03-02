import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../store/actions";

const Navigation = () => {
  const dispatch = useDispatch();

  const { nis, id } = useSelector((state) => {
    return state.auth;
  });

  const onLogoutClick = () => {
    dispatch(logoutAction());
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            sx={{ flexGrow: 1, display: { md: "flex" } }}
          >
            LOGO
          </Typography>

          {nis ? (
            <>
              <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
                <Button
                  component={Link}
                  to={`/attendances/${id}`}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  My Attendances
                </Button>
                <Button
                  component={Link}
                  to="/"
                  onClick={onLogoutClick}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Logout
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
                <Button
                  component={Link}
                  to="/register-admin"
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Admin Register
                </Button>
                <Button
                  component={Link}
                  to="/register"
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Register
                </Button>
                <Button
                  component={Link}
                  to="/login"
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Login
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navigation;
