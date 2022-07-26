import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';
import UseCallBackButtons from './UseCallbackButtons';

const UseCallback = (props) => {
    const [count, setCount] = useState(0)

    const inc = useCallback((delta) => {
        setCount(curr => curr + delta)
    }, [setCount])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <SectionTitle title='Exercício #1' />
            <div className="center">
                <span className="text">{count}</span>
                <UseCallBackButtons inc={inc} />
            </div>
        </div>
    )
}

export default UseCallback
