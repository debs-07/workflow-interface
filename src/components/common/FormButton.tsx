import { Button, ButtonProps, CircularProgress } from "@mui/material";

type FormButtonProps = ButtonProps & { isActionPending?: boolean };

export const FormButton = (props: FormButtonProps) => {
  const { type = "submit", disabled, isActionPending, children, ...restProps } = props;

  return (
    <Button variant="contained" type={type} disabled={disabled || isActionPending} {...restProps}>
      {isActionPending ? <CircularProgress size="1.5rem" /> : children}
    </Button>
  );
};
