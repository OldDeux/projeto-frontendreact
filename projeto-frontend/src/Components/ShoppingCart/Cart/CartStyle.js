import styled from 'styled-components'

export const CartStyle = styled.section`
    display: flex;
    width: 20vw;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    background-color:#f1f1f1;
    padding-top: 10px;
`

export const ItemCart = styled.div`
    width: 90%;
    height: 130px;
    background-color: #fafafa;
    gap: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 5px 5px 7px 3px #e9e9e9;
`
export const BtnRemove = styled.button`
    width: 70px;
    height: 20px;
    align-self: center;
    justify-self: center;
    border-radius: 5px;
    border: 0px solid;
    background-color: #F6C34A;
    color: black;
    
`

export const StyleCartText = styled.div`
    display: flex;
    width: 80%;
    justify-content:space-between ;
    margin-bottom: 8px;
    margin-top: 10px;
    
`
export const StyleCart = styled.div`
    display: flex;
    width: 100%;
    height: 65vh;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    padding: 10px;
    overflow-y: scroll;
`

export const Total = styled.h3`
    width: 300px;
    height: 90px;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 5px 5px 7px 3px #e9e9e9;
    font-size: 28px;
`