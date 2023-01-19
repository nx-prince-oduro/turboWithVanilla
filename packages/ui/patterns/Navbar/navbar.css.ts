import { style } from "@vanilla-extract/css";

export const navbarContainer = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#f07e00",
  color: "#fff",
  fontSize: "1.6rem",
  padding: "2rem",
  height: "5rem",
});

export const navLinks = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "2rem",
});
