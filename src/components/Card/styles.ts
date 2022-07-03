import { Box, styled } from "@mui/material";

export const Container = styled(Box)(() => ({
  minWidth: 260,
  maxWidth: 260,
  minHeight: 320,
  maxHeight: 320,
  borderRadius: 5,
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 8,
  marginRight: 16,

  "&:last-of-type": {
    marginRight: 0,
  },

  "& > button": {
    width: "100%",
    marginTop: "auto",
  },
}));

export const ContentHeader = styled(Box)(() => ({
  position: "relative",
  minWidth: 260,
  maxWidth: 260,
  height: 150,
  borderRadius: 5,
  margin: 0,
  padding: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#E6E6E6",

  "& img": { width: "100%", height: "100%" },
}));

export const Content = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  position: "relative",
}));

export const Title = styled("h1")(() => ({
  fontFamily: "DM Sans",
  fontSize: 12,
  fontWeight: 600,
  lineHeight: "16px",
  textAlign: "justify",
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  textOverflow: "ellipsis",
  overflow: "hidden",
  height: "fit-content",
  padding: '8px 0px',
}));

export const Price = styled("p")(() => ({}));

export const Category = styled("p")(() => ({}));

export const Rate = styled("p")(() => ({
  display: "flex",
  alignItems: "center",
  padding: "8px 0px 0px 0px",
  margin: 0,
  flexDirection: "row",
  flexWrap: "nowrap",

  "& span": {
    padding: 0,
    margin: 0,
    fontFamily: "DM Sans",
    fontSize: 12,
    fontWeight: 600,
    lineHeight: "16px",
    textAlign: "justify",
    color: "#00AF46",
  },

  "& svg": {
    width: 17,
    height: 17,
    marginBottom: 2,
  },
}));

export const Top = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",

  "& span": {
    padding: 0,
    margin: 0,
    fontFamily: "DM Sans",
    fontSize: 12,
    fontWeight: 600,
    lineHeight: "16px",
    textAlign: "justify",
    color: "#00AF46",
  },

  "& > p": {
    padding: 0,
    margin: 0,
    fontFamily: "DM Sans",
    fontSize: 12,
    fontWeight: 500,
    lineHeight: "16px",
    textAlign: "justify",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
  },
}));
