import { createContext, useState } from "react";

const ReviewContext = createContext()

export const ReviewProvider = ({children}) => {
    const [review, SetReview] = useState(
        [
            {
            id:1,
            text: 'Chioma and Ayo are fighting',
            rating: 8
            },
            {
            id:2,
            text: 'Josephine and Ayo dragging a trousers',
            rating: 8
            },
        ]
    )
        
    return <ReviewContext.Provider value={{review}}>
        {children}
    </ReviewContext.Provider>
}

export default ReviewContext
