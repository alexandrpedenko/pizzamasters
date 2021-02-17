import React from "react";
import "normalize.css";

import Nav from "./Nav";
import Footer from "./Footer";
import { GlobalStyles, Typography, Container } from "../styles";

function Layout({ children }) {
  return (
    <div className='app-wrp'>
      <GlobalStyles />
      <Typography />
      <Nav />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
}

export default Layout;
