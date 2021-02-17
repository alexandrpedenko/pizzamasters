import styled from "styled-components";

export const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  grid-auto-rows: 180px auto auto;
`;
