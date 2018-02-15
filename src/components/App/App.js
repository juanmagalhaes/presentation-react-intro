import React from "react";
import { Deck, Slide } from "spectacle";
import slidesImports from "~/components/slides";
import reactLogo from "~/assets/react-logo.svg";
import theme from "./theme";
import styles from "./App.module.scss";

import "font-awesome/css/font-awesome.css";
import "normalize.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: Array(slidesImports.length).fill(<Slide key="loading" />),
      topLogoStyle: {
        display: this.shouldShowTopIcon()
      }
    };
  }

  shouldShowTopIcon() {
    return window.location.hash.endsWith(0) ? "none" : "block";
  }

  componentDidMount() {
    const importedSlides = [];
    Promise.all(slidesImports).then(slidesImportsResolved => {
      slidesImportsResolved.forEach(slide => {
        importedSlides.push(slide.default);
      });
      this.setState({ slides: importedSlides });
    });

    window.onhashchange = () => {
      this.setState({
        topLogoStyle: {
          display: this.shouldShowTopIcon()
        }
      });
    };
  }

  render() {
    const { slides } = this.state;
    return (
      <React.Fragment>
        <Deck
          transition={["zoom", "slide"]}
          transitionDuration={500}
          theme={theme}
        >
          {slides.map((slide, index) =>
            React.cloneElement(slide, { key: index })
          )}
        </Deck>
        <img
          alt="React Logo"
          className={styles.logo}
          src={reactLogo}
          style={this.state.topLogoStyle}
        />
      </React.Fragment>
    );
  }
}
