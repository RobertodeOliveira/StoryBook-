import styled, { css } from "styled-components";

export const Wrapper = styled.div`  
    display: flex;
    align-items: center;
    justify-content: center;
`
type Wrapperprops = {
    bgcolor: string
}

export const Content = styled.button <Wrapperprops>`
    ${({ bgcolor }) => css`
    display: flex;
    flex-direction: row;
    width: fit-content;
    padding: 20px 40px;
    border: none;
    border-radius: 4px;
    background: ${bgcolor};
    color: white;
    `}
`