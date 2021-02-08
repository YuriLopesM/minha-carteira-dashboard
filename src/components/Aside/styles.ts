import styled from 'styled-components';

export const Container = styled.div`
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary };

    border-right: 1px solid ${props => props.theme.colors.gray};
    padding-left: 20px
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 70px;
`;

export const LogImg = styled.img`
    height: 40px;
    width: 40px;
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.info};
    text-decoration: none;
    transition: opacity .3s;
    margin: 10px 0;
    font-weight: 500;
    
    display: flex;
    align-items: center;

    &:hover {
        opacity: .7;
        
    }

    > svg {
        font-size: 20px;
        margin-right: 7px;
    }
`;

export const MenuItemButton = styled.button`
    color: ${props => props.theme.colors.info};
    background: none;
    border:none; 
    margin: 10px 0;

    font-size: 16px;
    font-weight: 500;
    
    display: flex;
    align-items: center;

    transition: opacity .3s;

    &:hover {
        opacity: .7;
        
    }

    > svg {
        font-size: 20px;
        margin-right: 7px;
    }
`;
