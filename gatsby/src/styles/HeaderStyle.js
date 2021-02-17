import styled from "styled-components";

export const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 8px 0;
  border-bottom: 1px solid var(--grey);
  background-color: var(--white);
  z-index: 1000;
  .header-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    display: flex;
    list-style-type: none;
  }
  li {
    font-size: 1.6rem;
    text-transform: uppercase;
    &:not(:last-child) {
      margin-right: 30px;
    }
  }
  a {
    text-decoration: none;
    &:hover {
      color: var(--red);
    }
    &[aria-current="page"] {
      color: var(--red);
    }
  }
`;
