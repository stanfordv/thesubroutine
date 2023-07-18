/* _app.js */
import App from "next/app";
import Head from "next/head";
import React from "react";

import Layout from "../components/Layout";
import withData from "../lib/apollo";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div style={{ "background-color": "#4E3524" }}>
        <Head>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    );
  }
}
export default MyApp;
