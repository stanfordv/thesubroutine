/* /components/Layout.js */
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Container, Nav, NavItem } from "reactstrap";

export default function Layout(props) {
  const title = "Welcome to Nextjs";
  return (
    <div>
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
      <header>
        <Nav className="navbar navbar-dark bg-dark">
          <NavItem>
            <Link href="/">Home</Link>
          </NavItem>

          <NavItem className="ml-auto">
            <Link href="/login">Sign In</Link>
          </NavItem>

          <NavItem>
            <Link href="/register">Sign Up</Link>
          </NavItem>
        </Nav>
      </header>
      <Container>{props.children}</Container>
    </div>
  );
}
