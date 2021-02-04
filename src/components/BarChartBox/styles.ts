import styled from 'styled-components';

interface ILegendProps {
    color: string;
}


export const Container = styled.div`
    width: 49%;
    height: 260px;

    margin: 10px 0;
    
    display: flex;

    border-radius: 7px; 

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
`;

export const SideLeft = styled.aside`
    width: 60%;
    padding: 30px 20px;

    > h2 {
        margin-bottom: 10px;
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
        background-color: ${props => props.theme.colors.tertiary};
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
`;

export const SideRight = styled.main`
    width: 40%;
    height: 250px;

    display: flex;
    justify-content: center;
    padding: 50px 30px 10px 0px
`;