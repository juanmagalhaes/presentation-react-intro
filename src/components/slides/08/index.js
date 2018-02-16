import React from "react";
import { Slide, Heading } from "spectacle";
import lego from "~/assets/lego.jpg";

export default (
  <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
    <Heading size={4} textColor="secondary" fit caps>
      A tool to build components
    </Heading>

    <img
      alt="Lego building blocks"
      src={lego}
      style={{ width: "100%", marginTop: "20px" }}
    />
  </Slide>
);
