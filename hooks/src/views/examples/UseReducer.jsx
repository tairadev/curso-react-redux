import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

function reducer(state, action) {
    switch(action.type) {
        case 'numberAddN':
            return {...state, number: state.number + action.payload}
        case 'numberAdd2':
            return {...state, number: state.number + 2}
        case 'numberMultiply7':
            return {...state, number: state.number * 7}
        case 'numberDivide25':
            return {...state, number: state.number / 25}
        case 'numberToInt':
            return {...state, number: parseInt(state.number) }
        case 'login':
            return {...state, user: { name: action.payload }}
        default:
            return state;
    }
}

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <SectionTitle title='Exercício #01' />
            <div className="center">
                {state.user ? <span className="text">{state.user.name}</span> : <span className="text">Sem usuário!</span>}
                <span className="text">{state.number}</span>
                <div>
                    <button className='btn' onClick={() => dispatch({type: 'login', payload: 'Taira'})}>Fazer login</button>
                    <button className='btn' onClick={() => dispatch({type: 'numberAdd2'})}>+2</button>
                    <button className='btn' onClick={() => dispatch({type: 'numberMultiply7'})}>x7</button>
                    <button className='btn' onClick={() => dispatch({type: 'numberDivide25'})}>/25</button>
                    <button className='btn' onClick={() => dispatch({type: 'numberToInt'})}>Para inteiro</button>
                    <button className='btn' onClick={() => dispatch({type: 'numberAddN', payload: 95})}>+95</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
