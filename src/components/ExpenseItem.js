import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense,
        });
    };

    const roundButtonStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        border: 'none',
    };

    const greenButtonStyle = {
        ...roundButtonStyle,
        backgroundColor: 'green',
        color: 'white',
    };

    const redButtonStyle = {
        ...roundButtonStyle,
        backgroundColor: 'red',
        color: 'white',
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>
                {currency}
                {props.cost}
            </td>
            <td>
                <button
                    onClick={(event) => increaseAllocation(props.name)}
                    style={greenButtonStyle}
                >
                    <FaPlus />
                </button>
            </td>
            <td>
                <button
                    onClick={(event) => decreaseAllocation(props.name)}
                    style={redButtonStyle}
                >
                    <FaMinus />
                </button>
            </td>
            <td>
                <TiDelete
                    size="1.5em"
                    onClick={handleDeleteExpense}
                ></TiDelete>
            </td>
        </tr>
    );
};

export default ExpenseItem;