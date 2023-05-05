import styled from "styled-components";

export const Wrapper = styled.section`
  width: 1128px;
  margin: 0 auto;
  `

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`

export const Nothing = styled.span`
  color: #9a9a99;
  margin: 7rem auto 0;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 3rem auto 0;
  gap: 15px;

  .card-appointment {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 7px;
    padding: 3rem;
    width: 100%;
    background: #d4d4d8;
    filter: drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));

    .infos {
      display: flex;
      flex-direction: column;

      .barber-title {
        font-size: 0.9rem;
        color: #475569;
        margin-bottom: 1.4rem;
      }
      
      .cut-title {
        font-size: 2rem;
        color: #0f172a;
      }
  
      .add-title {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 1.2rem;
        color: #334155;
        margin-top: 1rem;
        font-weight: normal;
  
        svg {
          margin-right: .5rem;
        }
      }
    } // infos

    .date {
      display: flex;
      flex-direction: column;
      align-items: end;

      .day-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #0f172a;
      }
      .hour-title {
        font-size: 1.3rem;
        font-weight: 500;
        color: #0f172a;
      }
    }

  }
`;