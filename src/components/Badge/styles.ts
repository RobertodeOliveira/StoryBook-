import styled from "styled-components";

export const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: #C0C0C0;
`

export const WrapperBadge = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.05rem;
    min-width: 18px;
    height: 18px;
    background-color: #FF6347;
    color: White;
    font-size: 12px;
    border-radius: 8px;
    margin-top: -36px;
    margin-left: 34px;
`
export const Container = styled.div`
  display: flex;
  gap: 10px;
`

export const ButtonCount = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 16px;
  text-decoration: none;
  margin-top: 12px;

  :hover{
    cursor: pointer;
  }
`