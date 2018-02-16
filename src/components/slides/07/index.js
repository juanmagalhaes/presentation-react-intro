import React from "react";
import { Slide, Heading } from "spectacle";
import thinkingMeme from "~/assets/thinking-meme.jpg";

export default (
  <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
    <Heading size={4} textColor="secondary" fit caps>
      Seriously?? Another JS library...
    </Heading>

    <img
      alt="Meme with a thinking face"
      src={thinkingMeme}
      style={{ width: "100%", margin: "20px 0" }}
    />
    <Heading size={4} textColor="tertiary" fit caps>
      Why should I use React anyway?
    </Heading>
  </Slide>
);
