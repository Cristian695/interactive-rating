import './Rating.css'
import Star from '../assets/icon-star.svg'
import { useState } from 'react'

export function Rating(props: any){
    const [selectedRating, setSelectedRating] = useState<number>()

    function handleRantingClicked(number: number){
        setSelectedRating(number)
    }

    function handleSubmit(e :React.FormEvent) {
        e.preventDefault()
        props.onSubmit(true, selectedRating)
    }

    const ratings = [1,2,3,4,5]

    return (
        <form onSubmit={handleSubmit} className='wrapper'>
            <div className='star'>
                <img src={Star} />
            </div>
            <div>
                <h1 className='title'>How did we do?</h1>
                <p>please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>
            <div className='ratings'>
                {ratings.map((rating, idx) => (
                    <button 
                        key={idx}
                        type='button' 
                        onClick={() => handleRantingClicked(rating)}
                    >
                            {rating}
                    </button>
                ))}
            </div>
            <button type='submit' className='submit'>S U B M I T</button>
        </form>
    )  
}