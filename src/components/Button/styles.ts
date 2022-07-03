import { Button, styled } from "@mui/material";

interface IButton {
  bgColor?: string;
}

export const DefaultButton = styled(Button)<IButton>(
  ({ bgColor }) => ({
    padding: "7px 20px",
    background: bgColor && bgColor,
  })
);
