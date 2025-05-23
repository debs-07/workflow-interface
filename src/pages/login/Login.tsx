import { Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";

import { Page } from "@/layouts/page/Page";
import { LoginForm } from "@/components/features/auth";
import { loginStyles } from "./Login.styles";

const Login = () => {
  return (
    <Page>
      <Grid container spacing={2} component="section" sx={loginStyles.container}>
        <Typography variant="h5" sx={loginStyles.header}>
          Welcome Back
        </Typography>
        <LoginForm />
        <Typography>
          Don&apos;t have an account?&nbsp;
          <Link component={RouterLink} to="/register" underline="none">
            Sign Up
          </Link>
        </Typography>
      </Grid>
    </Page>
  );
};

export default Login;
