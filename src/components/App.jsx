import './App.css'
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import { useState } from 'react';

export default function App() {
 const [values, setValues] = useState ({
	good: 0,
	neutral: 0,
	bad: 0,
}
 )
  const updateGood = () => {
    setValues({
      ...values,
      good: values.good + 1
    }
    );
  }
  return (
    <div className='mainDiv'>
      <Description />
      <Options states={values}
        updateGood={updateGood} />
      <Feedback />
    </div>
  )
}

