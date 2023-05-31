import React from "react";
import Slide from "@mui/material/Slide";
import { useScrollTrigger } from "@mui/material";

export function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
