import { ReactNode } from "react";
import { Box, BoxProps } from "@mui/material";

import { pageStyles } from "./Page.styles";

interface PageProps extends BoxProps {
  children: ReactNode;
}

export const Page = ({ children, sx, ...restProps }: PageProps) => {
  return (
    <Box sx={[pageStyles, ...(Array.isArray(sx) ? sx : [sx])]} {...restProps}>
      {children}
    </Box>
  );
};
