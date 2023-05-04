import styled from 'styled-components';

export const Container = styled.header`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 40px 0;

  h1 {
    font-weight: 800;
    color: #1f1f1f;

    span {
      font-weight: 400;
    }
  }
`

export const BackButton = styled.button`
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  font-size: 1rem;
  font-family: 'Inter Tight';
  cursor: pointer;

  svg {
    margin-right: 10px;
    font-size: 2rem;
  }
`;