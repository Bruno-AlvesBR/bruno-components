import { OutlinedInputProps } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "../../styles/theme";
import { Input } from "./styles";

export interface IInputProps extends OutlinedInputProps {
  message?: string;
}

export const DefaultInput: React.FC<IInputProps> = ({
  message,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Input placeholder={message} />
    </ThemeProvider>
  );
};
