import { OutlinedInput, styled } from "@mui/material";

export const Input = styled(OutlinedInput)(() => ({
  width: "100%",

  "& input": {
    width: "100%",
    padding: "10px 14px",
  },
}));
