import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 1128px;
  margin: 0 auto;
`

export const Content = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 80px;

  @media (max-width: 1366px) {
    padding-top: 40px;
  }

  .infos {
    width: 400px;

    i {
      font-size: 2rem;
    }
  
    h1 {
      font-size: 2.5rem;
      margin: 20px 0;
    }
  
    p {
      line-height: 1.5rem;
    }
  
    .buttons {
      display: flex;
      flex-direction: row;
      margin-top: 50px;
      gap: 20px;
  
      button {
        flex: 1;
        padding: 13px 0;
        font-size: 1rem;
        border: solid 1px;
        border-radius: 4px;
        cursor: pointer;
      }
  
      .my-hours {
        background: transparent;
        border-color: #1f1f1f;
      }
      .mark-hours {
        background: #3B82F6;
        color: white;
        border: none;
      }
    }
  }
`