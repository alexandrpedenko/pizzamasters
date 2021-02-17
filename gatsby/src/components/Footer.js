import React from "react";
import { Container } from "../styles";

function Footer() {
  return (
    <footer>
      <Container>
        <p>&copy; Pizza-Masters - {new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
}

export default Footer;
