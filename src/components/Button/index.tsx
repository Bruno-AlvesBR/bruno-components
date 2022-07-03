import { ButtonProps } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { ReactElement } from "react";

import { theme } from "../../styles/theme";
import { DefaultButton } from "./styles";

export interface IButtonProps extends ButtonProps {
  message: string;
  icon?: ReactElement;
  onclick(): void;
  bgColor?: string;
}

export const Button: React.FC<IButtonProps> = ({
  message,
  icon,
  onclick,
  bgColor,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <DefaultButton
        onClick={onclick}
        variant="contained"
        startIcon={icon}
        bgColor={bgColor}
      >
        {message}
      </DefaultButton>
    </ThemeProvider>
  );
};
