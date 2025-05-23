import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

import { registerValidationRules } from "@/utils/validation";
import { registerUser } from "@/api/auth";
import { FormButton, FormTextField } from "@/components/common";
import { registerFormStyles } from "./RegisterForm.styles";

interface formData {
  name: string;
  email: string;
  password: string;
}

const initialFormData = { name: "", email: "", password: "" };

export const RegisterForm = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: ({ message }) => {
      toast.success(message);
      void navigate("/login");
    },
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitted, isValid },
  } = useForm<formData>({ defaultValues: initialFormData });

  const submitHandler = (inputData: formData) => mutation.mutate(inputData);

  const disableSingUpButton = (isSubmitted && !isValid) || mutation.isPending;

  return (
    <Grid
      component="form"
      container
      spacing={2}
      flexDirection="column"
      sx={registerFormStyles.container}
      onSubmit={handleSubmit(submitHandler)}
    >
      <FormTextField
        name="name"
        control={control}
        rules={registerValidationRules.name}
        defaultValue=""
        label="Username"
      />
      <FormTextField
        name="email"
        control={control}
        rules={registerValidationRules.email}
        defaultValue=""
        label="Email"
      />
      <FormTextField
        name="password"
        control={control}
        rules={registerValidationRules.password}
        defaultValue=""
        label="Password"
        type="password"
      />
      <FormButton disabled={disableSingUpButton} isActionPending={mutation.isPending}>
        Sign Up
      </FormButton>
    </Grid>
  );
};
