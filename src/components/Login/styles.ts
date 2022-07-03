import { Dialog, styled } from "@mui/material";
import { withStyles } from "@mui/styles";

export const Container = withStyles(() => ({
  paper: {
    borderRadius: "10px",
    overflow: "hidden",
    width: "100%",
    maxWidth: "300px !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
  },
}))(Dialog);

export const Content = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",

  "& -webkit-scrollbar": {
    width: "1px",
  },
}));
