/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { v4 as uuid } from 'uuid'
// import data from '../data/reviewData' 


const base_url = import.meta.env.VITE_BASE_URL
const ReviewContext = createContext()

export const ReviewProvider = ({children}) => {
    const [review, setReview] = useState([]) 
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        fetch(`${base_url}/review`)
            .then((res) => res.json())
            .then((data)=> {
                setTimeout(() => {
                    setReview(data)
                    setLoading(false) 
                }, 1000);       
        });
    }, []);

      //function to add review
        const AddReview = (newReview) => {
            newReview.id=uuid()
            setReview([newReview, ...review])
        }

    //function to delete review.id in DOM
        const deleteReview = (id) =>{
            if(window.confirm('Are you sure you want to delete review?')){
            setReview(review.filter((item) => item.id !== id))
            }
        }

    return <ReviewContext.Provider value={{review, AddReview, deleteReview, loading}}>
        {children}
    </ReviewContext.Provider>
}

export default ReviewContext  
