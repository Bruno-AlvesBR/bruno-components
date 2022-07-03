import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { Button } from "../Button";
import { DefaultInput } from "../Input";

import { theme } from "../../styles/theme";
import { Container, Content } from "./styles";

export interface ILoginProps {
  openDialog: boolean;
  onclose?(): void;
}

export const Login: React.FC<ILoginProps> = ({
  openDialog,
  onclose,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Container open={openDialog} onClose={onclose}>
        <Content>
          <Box mb={2}>
            <DefaultInput message="email" />
          </Box>
          <Box mb={2}>
            <DefaultInput message="senha" />
          </Box>
          <Button
            type="submit"
            message="entrar"
            onclick={() => {}}
          />
        </Content>
      </Container>
    </ThemeProvider>
  );
};
