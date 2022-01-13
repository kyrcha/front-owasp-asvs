// Third party imports
import { Link as RouterLink } from "react-router-dom";
// MUI imports
import AppBar from "@mui/material/AppBar";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

function Header() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
          underline="none"
          sx={{ flexGrow: 1 }}
          component="div"
        >
          <Link component={RouterLink} to="/" underline="none" color="inherit">
            OWASP ASVS
          </Link>
        </Typography>
        <Button component={RouterLink} to="/signup" color="inherit">
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
