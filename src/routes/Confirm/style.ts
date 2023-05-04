import styled from "styled-components";


export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  margin: 0 auto;
  padding-bottom: 100px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 50px 0 20px;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  gap: 15px;

  p {
    font-size: 1.5rem;
  }
`;

export const Button = styled.button`
  width: 200px;
  padding: 15px 0;
  border: none;
  background: #3B82F6;
  color: white;
  border-radius: 7px;
  margin-top: 50px;
  cursor: pointer;
`
export const ButtonLink = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
  width: 200px;
  padding: 15px 0;
  border: none;
  background: #3B82F6;
  color: white;
  border-radius: 7px;
  margin-top: 50px;
  cursor: pointer;
`