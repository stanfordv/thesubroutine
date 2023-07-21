/* /pages/index.js */
import Videolist from "@/components/VideoPlayer";
import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import Songlist from "@/components/Songlist";
import Logo from "@/components/Logo";

function Home() {
  return (
    <div>
      {/* <Logo /> */}
      <Songlist />
      {/* <Videolist /> */}
    </div>
  );
}
export default Home;
