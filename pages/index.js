/* /pages/index.js */
import Videolist from "@/components/Videolist";
import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import Songlist from "@/components/Songlist";
import Logo from "@/components/Logo";

function Home() {
  return (
    <div className="container-fluid">
      <Songlist />
      <img width="300px" src="/subroutinelogo_sm.gif" />
      <Videolist />
      <Logo />
    </div>
  );
}
export default Home;
