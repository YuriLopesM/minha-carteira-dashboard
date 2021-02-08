import styled, { css } from 'styled-components';

interface IContainerProps {
    menuIsOpen: boolean;
}

interface IThemeToggleFooteProps{
    menuIsOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};

    border-right: 1px solid ${props => props.theme.colors.gray};
    padding-left: 20px;

    position: relative;

    @media(max-width: 600px){
        padding-left: 20px;
        position: fixed;
        z-index: 2;

        width: 180px;

        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        overflow: hidden;

        ${props => !props.menuIsOpen && css`
            border: none;
            border-bottom: 1px solid ${props => props.theme.colors.gray};
        `};
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 70px;
`;

export const LogImg = styled.img`
    height: 40px;
    width: 40px;

    @media(max-width: 600px){
        display: none;
    }
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;

    @media(max-width: 600px){
        display: none;
    }
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    transition: all .3s;
    margin: 10px 0;
    font-weight: 500;
    
    display: flex;
    align-items: center;

    &:hover {
        opacity: .7;
        transform: translateX(10px)
    }

    > svg {
        font-size: 20px;
        margin-right: 7px;
    }
`;

export const MenuItemButton = styled.button`
    color: ${props => props.theme.colors.warning};
    background: none;
    border:none; 
    margin: 10px 0;

    font-size: 16px;
    font-weight: 500;
    
    display: flex;
    align-items: center;

    transition: all .3s;

    &:hover {
        opacity: .7;
        transform: translateX(10px)
    }

    > svg {
        font-size: 20px;
        margin-right: 7px;
    }  
`;

export const ToggleMenu = styled.button`
        width: 40px;
        height: 40px;

        border-radius: 5px;
        font-size: 25px;
        background-color: ${props => props.theme.colors.warning};
        color: ${props => props.theme.colors.white};
        
        transition: opacity .3s;

        &:hover{
            opacity: .7;
        }

        display: none;
        
        @media(max-width: 600px){
            display: flex;
            justify-content: center;
            align-items: center;
        }        
    `;

export const ThemeToggleFooter = styled.footer<IThemeToggleFooteProps>`
    display: none;
    position: absolute;
    bottom: 30px; 

    @media(max-width: 470px){
        display: ${props => props.menuIsOpen ? 'flex' : 'none'}
    }
`;