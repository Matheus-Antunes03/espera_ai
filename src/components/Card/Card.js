import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #7153d5;
    color: #160e2b;
    width: 500px;
    border-radius: 10px;
`;

export function Card({ title, content }) {
    return (
        <Container>
            <h1>{title}</h1>
            <p>{content}</p>
        </Container>
    );
}