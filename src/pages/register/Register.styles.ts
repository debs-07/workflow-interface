import { SxStyling } from "@/types/styling";

export const registerStyles: SxStyling<"container" | "header"> = {
  container: {
    width: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    marginBottom: "10px",
    fontWeight: 700,
  },
};
