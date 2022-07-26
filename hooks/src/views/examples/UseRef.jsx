import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const merge = (s1, s2) => {
    let maior = s1.length >= s2.length ? s1 : s2;
    let menor = s2.length <= s1.length ? s2 : s1;
    return [...maior].map((e, i) => {
        return `${e}${menor[i] || ''}`
    }).join('')
}

const UseRef = (props) => {

    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [merged, setMerged] = useState('')

    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(() => {
        count.current++
        myInput2.current.focus()
    }, [value1])

    useEffect(() => {
        count.current++
        myInput1.current.focus()
    }, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title='Exercício #1' />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)}</span>
                    <span className="text red"> [ {count.current} ]</span> 
                </div>
                <input type="text" className="input" value={value1} onChange={e => setValue1(e.target.value)} ref={myInput1} />
            </div>

            <SectionTitle title='Exercício #2' />
            <div className="center">
                <input type="text" className="input" value={value2} onChange={e => setValue2(e.target.value)} ref={myInput2} />
            </div>
        </div>
    )
}

export default UseRef
