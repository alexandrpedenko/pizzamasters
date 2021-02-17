import styled from "styled-components";

export const PaginationStyle = styled.div`
  width: 100%;
  text-align: center;
  a {
    display: inline-block;
    padding: 4px 12px;
    margin: 0 2px;
    text-decoration: none;
    &[aria-current],
    &.current {
      color: var(--red);
    }
  }
`;
