/* /components/Layout.js */
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Col, Container, Nav, NavItem, Row } from "reactstrap";
import styles from "@/components/layout.module.css";
import Image from "next/image";

export default function Layout(props) {
  const title = "Introducing the Subroutine";
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        /> */}
      </Head>

      <Nav className={styles.topbanner + " navbar"}>
        <Row className={styles.logocontainer}>
          <Col>
            <NavItem>
              <Link href="/">
                <Image
                  className={styles.logodesign}
                  src="/logo3.png"
                  alt="Subroutine logo" // Good to provide alt text for accessibility
                  width={600} // Width of the image
                  height={70} // You need to provide a height value for Next.js Image component
                />
              </Link>
            </NavItem>
          </Col>
        </Row>
        <Row className={styles.navcontainer}>
          <Col>
            <NavItem className={styles.navitem}>
              <Link href="/audio">
                <div>Songs</div>
              </Link>
            </NavItem>
          </Col>
          <Col>
            <NavItem className={styles.navitem}>
              <Link href="/videos">
                <div> Videos</div>
              </Link>
            </NavItem>
          </Col>
          <Col>
            <NavItem className={styles.navitem}>
              <Link href="/about">
                <div> About</div>
              </Link>
            </NavItem>
          </Col>
        </Row>
      </Nav>

      <Container>{props.children}</Container>
    </div>
  );
}
