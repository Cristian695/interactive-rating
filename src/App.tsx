import { useState } from 'react'
import { Rating } from './components/Rating'
import { ThankyouPage } from './components/ThankYouPage'

function App() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [rating, setRating] = useState<number>()

  function handleSubmission(value: boolean, rating: number){
    setIsSubmitted(value)
    setRating(rating)
  }

  return (
    <div >
      {isSubmitted ? <ThankyouPage ratingNumber={rating} /> : <Rating onSubmit={handleSubmission} />}
    </div>
  )
}

export default App
