import styled from 'styled-components'

export const CartStyle = styled.section`
    display: flex;
    width: 20vw;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    padding: 10px;
    background-color:#f1f1f1;
`

export const ItemCart = styled.div`
    width: 90%;
    height: 130px;
    background-color: #fafafa;
    gap: 8px;
    display: flex;
    flex-direction: column;
    
    align-items: center;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 5px 5px 7px 3px #e9e9e9;
`
export const BtnRemove = styled.button`
    width: 70px;
    height: 30px;
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
    margin-bottom: 10px;
    margin-top: 20px;
    
`