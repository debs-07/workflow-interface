import { Box } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router";

import { AuthProvider } from "@/context/AuthContext";

const queryClient = new QueryClient();

export const Root = () => {
  return (
    <Box component="section">
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </AuthProvider>
    </Box>
  );
};
