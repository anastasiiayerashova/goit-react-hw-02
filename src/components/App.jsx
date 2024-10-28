import './App.css'
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';
import { useState, useEffect } from 'react';

export default function App() {
    const [values, setValues] = useState(() => {
      
    const savedObj = window.localStorage.getItem("key");
      
    if (savedObj) {
      try {
        return JSON.parse(savedObj)
      }
      catch (error) {
        console.log(error)
      }
    }
      
    return {
	good: 0,
	neutral: 0,
	bad: 0,
}
 }
  )
  
  useEffect(() => {
    window.localStorage.setItem("key", JSON.stringify(values));
}, [values])

  const updateFeedback = (feedbackType) => {
    setValues((prevValues) => ({
  ...prevValues,
  [feedbackType]: prevValues[feedbackType] + 1
    }))
    
  }

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);

  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    })
    
  }
  
  return (
    <div className='mainDiv'>
      <Description />
        <Options 
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      /> 
      {totalFeedback > 0 ? <Feedback states={values} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} /> : <Notification />}
    </div>
  )
}