import styled from 'styled-components';

interface ILegendProps {
    color: string;
}


export const Container = styled.div`
    width: 100%;

    margin: 10px 0;
    padding: 30px 20px;

    display: flex;
    flex-direction: column;

    border-radius: 7px;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    

`;

export const ChartContainer = styled.div`
    flex: 1;
    height: 260px;

`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    > h2 {
        margin-bottom: 20px;
    }

    @media(max-width: 1200px){
        flex-direction: column;
    }
`;

export const LegendContainer = styled.ul`
    list-style: none;
    display: flex;
    padding-right: 16px;
    
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin: 0 0 12px 12px;

    font-size: 16px;


    > div {
        background-color: ${props => props.color};

        width: 25px;
        height: 25px;
        border-radius: 5px;
    }

    > span {
        font-weight: 500;
        margin-left: 7px;
    }

    @media(max-width: 1280px){
        > div {
            width: 30px;
            height: 30px;
        }
    }
`;
