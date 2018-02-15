import React from "react";
import { Heading, Slide, Text } from "spectacle";
import reactLogo from "~/assets/react-logo.svg";
import styles from "./styles.module.scss";

export default (
  <Slide transition={["none"]} bgColor="primary">
    <img alt="React Logo" className={styles.logo} src={reactLogo} />
    <Heading size={1} fit lineHeight={1} textColor="secondary">
      Introduction to React
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={1}>
      @juanmagalhaes
    </Text>
  </Slide>
);
