import styled from 'styled-components'

export const HomeStyle = styled.section`
    display: flex;
    width: 60vw;
    flex-direction: column;
    gap: 16px;
    padding: 10px;
    background-color:#f1f1f1;
`

export const DivUm= styled.div`
    height: 5vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`

export const DivDois= styled.div`
    display: flex;
    height: 85%;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 16px;
`
