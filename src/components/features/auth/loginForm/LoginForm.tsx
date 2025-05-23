import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { FormButton, FormTextField } from "@/components/common/index";
import { loginValidationRules } from "@/utils/validation";
import { loginFormStyles } from "./LoginForm.styles";
import { useAuth } from "@/context/AuthContext";
import { loginUser } from "@/api/auth";

interface formData {
  email: string;
  password: string;
}

const initialFormData = { email: "", password: "" };

export const LoginForm = () => {
  const { login } = useAuth();

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: ({ token, message }) => {
      login(token);
      toast.success(message);
    },
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitted, isValid },
  } = useForm<formData>({ defaultValues: initialFormData });

  const submitHandler = (inputData: formData) => mutation.mutate(inputData);

  const disableSingInButton = (isSubmitted && !isValid) || mutation.isPending;

  return (
    <Grid
      component="form"
      container
      spacing={2}
      flexDirection="column"
      sx={loginFormStyles.container}
      onSubmit={handleSubmit(submitHandler)}
    >
      <FormTextField name="email" control={control} rules={loginValidationRules.email} defaultValue="" label="Email" />
      <FormTextField
        name="password"
        control={control}
        rules={loginValidationRules.password}
        defaultValue=""
        label="Password"
        type="password"
      />
      <FormButton disabled={disableSingInButton} isActionPending={mutation.isPending}>
        Sign In
      </FormButton>
    </Grid>
  );
};
