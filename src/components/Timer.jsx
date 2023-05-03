import React, { useState } from 'react';
import styled from 'styled-components';
import PlayImage from '../assets/imgs/play.png';
import PauseImage from '../assets/imgs/pause.png';
import StopImage from '../assets/imgs/stop.png';

function getTimeInMinutes(seconds) {
    let minutos = Math.floor(seconds / 60);
    return minutos.toLocaleString('pt-BR', { minimumIntegerDigits: 2 });
}

function getTimeSeconds(seconds) {
    let s = seconds % 60;
    return s.toLocaleString('pt-BR', { minimumIntegerDigits: 2 });
}

const Container = styled.div`
    display: flex;
    border: 1px solid #00000022;
    border-radius: 10px;
    box-shadow: 0 0 8px #00000011;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 300px;
    gap: 20px;
    padding: 20px 0px;
    background-color: #FFFFFFAA;
    backdrop-filter: blur(8px);
`;

const Visor = styled.p`
    font-family: calibri;
    font-weight: bold;
    font-size: 40px;
    margin: 0;
`;

const ButtonsContainer = styled.div`
    display: flex;
    gap: 40px;
`;

const Button = styled.img`
    cursor: pointer;
    width: 30px;
    height: 30px;
    object-fit: contain;
    border: 1px solid #00000022;
    border-radius: 5px;
    box-shadow: 0 0 8px #00000011;
    padding: 10px;
    background-color: white;
    transition: 0.1s all;

    &:hover {
        filter: invert();
    }

    &[disabled], &[invert]:hover {
        cursor: unset;
        opacity: 0.5;
        filter: none;
    }
`;

const Timer = () => {
    const countingStates = {
        counting: 'counting',
        paused: 'paused',
        stopped: 'stopped'
    };
    const [tempo, setTempo] = useState(0);
    const [intervalID, setIntervalID] = useState(null);
    const [countingState, setCountingState] = useState(countingStates.stopped);

    const startTimer = () => {
        if (countingState === countingStates.stopped) {
            setTempo(0);
        }

        setCountingState(countingStates.counting);
        setIntervalID(setInterval(() => {
            setTempo(tempo => tempo + 1);
        }, 1000));
    }

    const pauseTimer = () => {
        clearInterval(intervalID);
        setCountingState(countingStates.paused);
    }

    const stopTimer = () => {
        clearInterval(intervalID);
        setCountingState(countingStates.stopped);
    };

    return (
        <Container>
            <Visor>
                {getTimeInMinutes(tempo)} : {getTimeSeconds(tempo)}
            </Visor>
            <ButtonsContainer>
                <Button 
                    src={PlayImage} 
                    disabled={countingState === countingStates.counting}
                    onClick={startTimer}
                ></Button>
                <Button 
                    src={PauseImage} 
                    disabled={
                        countingState === countingStates.paused ||
                        countingState === countingStates.stopped
                    }
                    onClick={pauseTimer}
                ></Button>
                <Button 
                    src={StopImage}
                    disabled={countingState === countingStates.stopped}
                    onClick={stopTimer}
                ></Button>
            </ButtonsContainer>
        </Container>
    )
};


export default Timer;