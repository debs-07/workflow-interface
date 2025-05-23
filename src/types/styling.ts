import { SxProps, Theme } from "@mui/material";

export type SxStyling<T extends string> = Record<T, SxProps<Theme>>;
