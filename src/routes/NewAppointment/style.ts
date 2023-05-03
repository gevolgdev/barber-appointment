import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 1128px;
  margin: 0 auto;
`

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`

export const Forms = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: 50px auto 0;
  gap: 20px;

  .containers {
    display: flex;
    flex-direction: column;
  }
  
  label {
    font-size: .9rem;
    color: #3e3e3e;
    margin-bottom: 5px;
  }

  input, select {
    border: solid 1px #1f1f1f;
    outline: none;
    background: #FFFAFA;
    padding: 15px 10px;
    border-radius: 4px;
    font-family: 'Inter Tight', sans-serif;
    font-size: 1rem;
  }

  button {
    width: 200px;
    padding: 15px 0;
    border: none;
    background: #3B82F6;
    color: white;
    border-radius: 7px;
    margin-top: 10px;
  }
`