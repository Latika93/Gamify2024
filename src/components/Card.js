import React, { useState } from 'react'

const Card = ({ name, score }) => {

    const [scores, setScores] = useState(score);

    const inc = () => {
        setScores(scores + 1);
    }

    const dec = () => {
        setScores(scores - 1);
    }

    return (
        <div className='w-1/2 my-8 justify-center'>
            <div className='flex bg-blue-200 items-center justify-between p-5 rounded-full'>
                <div className='items-align text-center pl-8'>
                    <h1 className='w-28'>
                        {name}
                    </h1>
                </div>

                <div className='text-center border border-solid p-3'>
                    <p>
                        Score
                    </p>
                    <div className='text-center'>
                        <p>{scores}</p>
                    </div>
                </div>

                <div className='flex items-center justify-between pr-8'>
                    <button className='p-2 rounded-full' onClick={()=>(inc())}>^</button>
                    <button className='p-2 rounded-full' onClick={dec}>v</button>
                </div>
            </div>
        </div>


    )
}

export default Card