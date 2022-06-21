import chatIcon from '../images/chat.svg'
import React from 'react'

export default function GridCard(props) {
    const {postsArray} = props

    function getImageGrid() {
        if(postsArray.length === 0) {
            return (<></>)
        }
        const grid = postsArray.map((item) => {
            return (
                <img className={'p-5px'} src={item} width={150} height={150}/>
            )
        })

        return (
            <>
                {grid}
            </>
        )
    }

    return (
        <>
            <div className={"grid "}>
                {getImageGrid(postsArray)}
            </div>
        </>
    )
}
