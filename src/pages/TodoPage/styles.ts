import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    height: 100vh;
`;

export const TodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 700px;
    max-width: 100%;
    height: 800px;

    padding: 20px 0 40px 0;

    background-color: ${props => props.theme.colors.todoContainer};

    transition: box-shadow .3s;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }

`;

export const Title = styled.h1`
     margin: 10px;
`;

export const Create = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 80%;
`;

export const CreateTodo = styled.input`
    width: 100%;
    height: 55px;

    padding-left: 20px;

    border: none;
    border-bottom: 1px solid #000;
    background-color: ${props => props.theme.colors.inputCreateTodo};
`;

export const CreateButton = styled.button`
    width: 55px;
    height: 55px;

    border: none;
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;

    background-color: ${props => props.theme.colors.createButton};
`;

export const TodoCompleted = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
`;

export const TodosList = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    width: 100%;

    overflow-y: scroll;

    &::-webkit-scrollbar {
     width: 7px;
    }

    ::-webkit-scrollbar-thumb {
     background-color: #F0F0F0;
     border-radius: 5px;
    }
`;

export const Todo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    align-items: center;
    
    width: 90%;
    height: 40px;
    
    margin-top: 5px;
    padding: 10px;

    border: 1px solid #000;
    
`;

export const TodoText = styled.p`
    font-size: 20px;
    font-weight: bold;
`;

export const Buttons = styled.div`
    display: flex;
`;

export const DeleteButton = styled.button`
    background-color: ${props => props.theme.colors.deleteButton};
    border: none;
    margin-right: 10px;
`;
