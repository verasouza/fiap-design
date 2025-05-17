
import styled from "styled-components";


export const SectionContainer = styled.section`
    text-align: center;
    padding: 20px;
    h1{
    margin-bottom: 20px;
    }
    p{ margin-top:0px;}
`;

export const InputContainer = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: last baseline; 
    justify-content: center;
    gap: 10px; 

    label {
        display: block;
        margin-bottom: 4px; 
        text-align: left;
        font-size: 14px;
        font-weight: 500;
    }

    input {
        height: 40px; 
    }

    button {
        height: 40px; 
    }
`;

export const ButtonGroup = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
`;

export const CardSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 20px;

    .section-title {
        text-align: center;
    }

    .card-container {
        display: flex;
        gap: 16px;
        justify-content: center;
        flex-wrap: wrap; 
        max-width: 100%;
        margin: 0 auto;
    }

    .card {
        flex: 1 1 300px; 
        max-width: 400px; 
        height: 200px; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #ddd; 
        border-radius: 8px;
        padding: 16px;
        
        background-color: white;
    }
`;