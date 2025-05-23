import { SxProps } from "@mui/material";

export const pageStyles: SxProps = {
  minHeight: "100vh", // Full viewport height
  width: "100vw", // Full viewport width
  overflowX: "hidden", // Prevent horizontal scroll
  bgcolor: "background.default", // Use MUI theme background
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
