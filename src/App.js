
import { useState } from 'react';
import './App.css';



export const calculateAge = (todayDate, enteredDate) => {
  const ageDate =  todayDate - enteredDate;
  return Math.floor(ageDate / 31536000000)
}


function App() {

  const [enterData, setEnterData] = useState(null);
  const [age, setAge] = useState("");
  let today = new Date();


  const submitHandler = () => { 
      console.log("today: ", today.getTime(), " entered: ", enterData.getTime())
    setAge(calculateAge(today.getTime(),enterData.getTime()));

  }
 
  const changeDateHandler = (e) => {
    setEnterData(new Date(e.target.value))
  
  } 
    
  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'column' , width: '300px'}}>
        <label>Date:</label>
        <input type='date' id='start' name='trip-start' onChange={changeDateHandler}/>
        <label>Age:</label>
        <h1>{age}</h1>
        <button onClick={submitHandler}>calculate</button>

        </div>
        test
    </div>
  );
}

export default App;
