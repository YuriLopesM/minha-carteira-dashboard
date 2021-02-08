import styled from 'styled-components';

interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    width: 49%;
    height: 300px;

    margin: 10px 0;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;

    display: flex;

    @media(max-width: 770px){
        display: flex;
        width: 100%;
    }
`;

export const SideLeft = styled.aside`
    padding: 30px 20px;

    > h2 {
        margin-bottom: 100px;
    }

    @media(max-width: 1345px){
        padding: 0 15px 5px;
        margin-bottom: 7px;

        > h2 {
            margin-top: 15px;
            margin-bottom: 7px;
        }
    }

    @media(max-width: 420){
        padding: 15px;
        margin-bottom: 7px;
    }

`;  

export const LegendContainer = styled.ul`
    list-style: none;
    height: 120px;
    padding: 5px;
    overflow-y: scroll;

    ::-webkit-scrollbar{
        width: 7px;

    }

    ::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track{
        background-color: none;
    }
    
    @media(max-width: 1345px){
        display: flex;
        flex-direction: column;
    }
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    font-size: 16px;


    > div {
        background-color: ${props => props.color};

        width: 55px;
        height: 40px;
        border-radius: 5px;

        font-size: 16px;
        font-weight: 500;

        line-height: 40px;
        text-align: center;
    }

    > span {
        font-weight: 500;
        margin-left: 7px;
    }

    @media(max-width: 1345px){
        font-size: 14px;
        margin: 3px 0;

        > div {
            font-size: 12px;
            width: 35px;
            height: 35px;
            line-height: 35px;
        }

        >span {
            margin-left: 7px;
        }
    }
`;

export const SideRight = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;

    @media(max-width: 1345px){
        height: 100%;
    }
`;