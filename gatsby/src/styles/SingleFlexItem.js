import styled from "styled-components";

export const SingleFlexItem = styled.div`
  padding: 0 15px;
  flex: 0 0 25%;
  max-width: 25%;
  margin-bottom: 30px;
  @media (max-width: 992px) {
    flex: 0 0 33.33%;
    max-width: 33.33%;
  }
  @media (max-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (max-width: 480px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .flex-wrap {
    height: 100%;
    padding: 1rem;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    box-shadow: 0 0 15px rgba(20, 20, 20, 0.1);
    border-radius: 25px;
  }
  img {
    border-radius: 15px;
  }
  .flex-content {
    padding: 0 10px;
  }
  .single-img {
    text-align: center;
    img {
      max-height: 176px;
    }
  }
  .pizza-item-title {
    display: inline-block;
    margin-top: 10px;
    font-size: 1.7rem;
    font-weight: bold;
    text-decoration: none;
  }
  .pizza-toppings {
    margin-left: 10px;
    font-size: 1.4rem;
  }
  .item-meta {
    margin-top: 8px;
    font-size: 1.3rem;
    color: #888;
  }
  .item-stars {
    margin: 10px 0;
    font-size: 1.3rem;
  }
  .pizza-item-description {
    font-size: 1.6rem;
    color: #888;
    margin: 9px 0;
  }
`;
