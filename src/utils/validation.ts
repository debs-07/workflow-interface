export const registerValidationRules = {
  name: {
    required: "Name is required",
    minLength: { value: 3, message: "Name must be at least 3 characters long" },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Enter a valid email",
    },
  },
  password: {
    required: "Password is required",
    minLength: { value: 6, message: "Password must be at least 6 characters long" },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\s]+$/,
      message: "Password must be at least 6 characters, with 1 uppercase, 1 lowercase, and 1 number",
    },
  },
};

export const loginValidationRules = {
  email: {
    required: "Email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Enter a valid email",
    },
  },
  password: {
    required: "Password is required",
  },
};
