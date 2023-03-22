import styled from 'styled-components'

export const ProductCardStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    justify-content: center;
    gap:20px;
    width: 100%;
    height: 100%;
`

export const Box = styled.div`
    width: 200px;
    height: 280px;
    background-color: #fafafa;
    gap: 10px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    
    border-radius: 10px;
    box-shadow: 5px 5px 7px 3px #e9e9e9;
`

export const Img = styled.img`
    width: 150px;
    height: 150px;
    align-self: center;
    justify-self: center;
`

export const Dscpt = styled.div`
    align-items: left;
    gap: 10px;
    display: flex;
    flex-direction: column;
`
export const Btn = styled.button`
    width: 130px;
    height: 25px;
    align-self: center;
    justify-self: center;
    border-radius: 5px;
    border: 0px solid;
    background-color: #F6C34A;
    color: black;
    
`