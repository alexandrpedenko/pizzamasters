import styled from "styled-components";

export const SingleGridItem = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    --rows: 1fr auto auto;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  grid-gap: 1rem;
  padding: 0.8rem;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  box-shadow: 0 0 15px rgba(20, 20, 20, 0.1);
  border-radius: 25px;
  img {
    border-radius: 15px;
  }
  .single-img {
    text-align: center;
    img {
      max-height: 176px;
    }
  }
  .pizza-item-title {
    margin-left: 10px;
    font-size: 1.7rem;
    font-weight: bold;
    text-decoration: none;
  }
  .pizza-toppings {
    margin-left: 10px;
    font-size: 1.4rem;
  }
`;
