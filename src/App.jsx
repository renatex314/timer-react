import Timer from './components/Timer';
import styled from 'styled-components';
import BackgroundImage from './assets/imgs/background.jpeg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

const Title = styled.p`
    font-size: 30px;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 3px;
    color: black;
    margin-bottom: 30px;
    font-weight: bold;
    background-color: #FFFFFFAA;
    backdrop-filter: blur(8px);
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid #00000022;
    box-shadow: 0 0 10px #00000022;
`;

const Background = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    object-fit: cover;
    filter: brightness(0.8);
`;

const App = () => (
    <Container id="app">
        <Background src={BackgroundImage}></Background>
        <Title>Cronômetro</Title>
        <Timer></Timer>
    </Container>
);

export default App;