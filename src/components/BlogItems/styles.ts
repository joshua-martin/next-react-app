import styled from 'styled-components';

export const Title = styled.h1`
    font-size: ${props => props.theme.typography.headlineSmall};
    color: ${props => props.theme.color.blue};
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;

    &:after {
        margin: auto auto auto 16px;
        content: "";
        flex: 1 1;
        border-bottom: 1px solid ${props => props.theme.color.sky};
    }
`

export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 14px 0;
    max-width: 1024px;
    width: 100%;
    margin-left: auto;

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 24px;
    }
`

export const Card = styled.a`
    border-radius: 4px;
    background-color: white;
    padding: 22px;
    box-shadow: 0px 2px 4px 0px rgba(168,182,255,0.2);
    border: 2px solid white;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    transition: all 300ms ease-in-out;

  


    @media (min-width: 1024px) {
        ${props => props.largeItem && `
            grid-column: span 2/span 2;
        `}
    }


    &:hover {
        box-shadow: 0px 2px 12px 0px rgba(168,182,255,0.5);
    }
    &:focus {
        border: 2px solid ${props => props.theme.color.blue};
        outline: none;
        box-shadow: 0px 2px 12px 0px rgba(168,182,255,0.5);
    }

    @media (prefers-reduced-motion) {
        transition: none;
    }
`

export const CardTitle = styled.h2`
    font-size: ${props => props.largeItem ? props.theme.typography.headline : props.theme.typography.headlineSmall};
    color: ${props => props.theme.color.blue};
    margin: 0 0 8px;
`

export const CardContent = styled.p`
    font-size: ${props => props.largeItem ? props.theme.typography.body : props.theme.typography.bodySmall};
    line-height: ${props => props.largeItem ? '24px' : '20px'};
    margin-bottom: 16px;
    color: black;
`

export const Arrow = styled.div`
    margin-top: auto;
    margin-left: auto;
    color: ${props => props.theme.color.sky};
    font-size: ${props => props.theme.typography.body};
`