/* /components/Layout.js */
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Container, Nav, NavItem } from "reactstrap";

export default function Layout(props) {
  const title = "Welcome to Nextjs";
  return (
    <div style={{ height: "1000px", backgroundColor: "#4E3524" }}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </Head>

      <Nav className="navbar" style={{ backgroundColor: "#568203" }}>
        <NavItem>
          <Link href="/" style={{ color: "#FFFED0" }}>
            Home
          </Link>
        </NavItem>

        <NavItem className="ml-auto">
          <Link style={{ color: "#FFFED0" }} href="/login">
            Sign In
          </Link>
        </NavItem>

        <NavItem>
          <Link style={{ color: "#FFFED0" }} href="/register">
            Sign Up
          </Link>
        </NavItem>
      </Nav>

      <Container>{props.children}</Container>
    </div>
  );
}
