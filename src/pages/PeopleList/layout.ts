import { up } from 'styled-breakpoints';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  color: #000;
  width: 90%;
  height: 100%;
  margin: auto;
  padding: 10px;
  text-align: center;
`;

export const Info = styled.div`

  height: 800px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  ${up('md')} {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
  }
`;
