import React from "react";
import { Slide } from "spectacle";
import juanAvatar from "~/assets/juan.jpg";
import styles from "./styles.module.scss";

export default (
  <Slide bgColor="primary" textColor="tertiary" transition={["fade"]}>
    <img alt="Juan's Avatar" className={styles.avatar} src={juanAvatar} />
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.row}>
          <div className={styles.icon}>
            <i className="fa fa-user" />
          </div>
          <div className={styles.text}>Juan Magalhães</div>
        </div>

        <div className={styles.row}>
          <div className={styles.icon}>
            <i className="fa fa-briefcase" />
          </div>
          <div className={styles.text}>Hestis</div>
        </div>

        <div className={styles.row}>
          <div className={styles.icon}>
            <i className="fa fa-map-marker" />
          </div>
          <div className={styles.text}>Salvador, BA</div>
        </div>

        <div className={styles.row}>
          <div className={styles.icon}>
            <i className="fa fa-skype" />
          </div>
          <div className={styles.text}>juanmagalhaes</div>
        </div>

        <div className={styles.row}>
          <div className={styles.icon}>
            <i className="fa fa-github" />
          </div>
          <div className={styles.text}>https://github.com/juanmagalhaes</div>
        </div>
      </div>
    </div>
  </Slide>
);
