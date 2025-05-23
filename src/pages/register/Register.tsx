import { Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";

import { Page } from "@/layouts/page/Page";
import { RegisterForm } from "@/components/features/auth";
import { registerStyles } from "./Register.styles";

const Register = () => {
  return (
    <Page>
      <Grid container spacing={2} component="section" sx={registerStyles.container}>
        <Typography variant="h5" sx={registerStyles.header}>
          Create Account
        </Typography>
        <RegisterForm />
        <Typography>
          Already have an account?&nbsp;
          <Link component={RouterLink} to="/login" underline="none">
            Sign In
          </Link>
        </Typography>
      </Grid>
    </Page>
  );
};

export default Register;
