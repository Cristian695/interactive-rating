import './ThankYouPage.css'

import ThankImg from '../assets/illustration-thank-you.svg'

export function ThankyouPage({ ratingNumber }: any){
 return (
    <div className='ThankYouWrapper'>
        <img className='phone' src={ThankImg} />
        <span>You selected {ratingNumber} out of 5</span>
        <h1>Thank you!</h1>
        <p>
            We appreciate you taking the time to give a rating.
            If you ever need more support, don't hesitate to get in touch!
        </p>
    </div>
 )
}