import styled from 'styled-components';

export const Container = styled.div`
    height: 60px;
    background: ${props => props.theme.colors.primary};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
`;

export const Description = styled.div`
    font-size: 20px;
    color: ${props => props.theme.colors.text};
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 200px 100px;
`;

