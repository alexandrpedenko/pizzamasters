import styled from "styled-components";

export const SinglePizzaStyle = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  .single-pizza__right {
    h1 {
      margin-bottom: 30px;
      font-weight: 900;
      font-size: 4.4rem;
    }
    ul {
      margin-top: 14px;
    }
    ul li {
      display: inline-block;
      list-style-type: none;
      margin-right: 12px;
      font-size: 1.6rem;
      color: #777;
    }
  }
`;
