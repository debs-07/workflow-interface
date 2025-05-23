import { TextField, TextFieldProps as MuiTextFieldProps } from "@mui/material";
import { Control, FieldPathValue, FieldValues, Path, RegisterOptions, useController } from "react-hook-form";

type FormTextFieldProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: Omit<RegisterOptions<T, Path<T>>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  defaultValue: FieldPathValue<T, Path<T>>;
  disabled?: boolean;
} & Omit<
  MuiTextFieldProps,
  "name" | "value" | "disabled" | "onBlur" | "onChange" | "inputRef" | "error" | "helperText"
>;

export const FormTextField = <T extends FieldValues>(props: FormTextFieldProps<T>) => {
  const { name, control, rules, defaultValue, disabled = false, ...restProps } = props;

  const {
    field: { value, onBlur, onChange, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
    disabled,
  });

  return (
    <TextField
      size="small"
      name={name}
      value={value}
      disabled={disabled}
      onBlur={onBlur}
      onChange={onChange}
      inputRef={ref}
      error={Boolean(error)}
      helperText={error?.message}
      {...restProps}
    />
  );
};
