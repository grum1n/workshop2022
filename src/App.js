
import { useState } from 'react';
import './App.css';

///pirmas
export const calculateAge = (todayDate, enteredDate) => {
  const ageDate =  todayDate - enteredDate;
  return Math.floor(ageDate / 31536000000)
}



export const calculateYears = (todayYears, enteredYears) => {
  const todaysYear = todayYears.getFullYear();
  const todayMonth = todayYears.getMonth() + 1;

  const enteredYear = enteredYears.getFullYear();
  const enteredMonth = enteredYears.getMonth() + 1;
console.log(todaysYear - enteredYear )
  const result = `${todaysYear - enteredYear } / ${todayMonth <= enteredMonth ?  enteredMonth - todayMonth : null }`
console.log("result" , result)

}



function App() {
  console.log(process.env);
  const [enterData, setEnterData] = useState(null);
  const [age, setAge] = useState("");
  let today = new Date();


  const submitHandler = () => { 

    //pirmas
    if (process.env.NODE_ENV ==='development'){
      console.log("today: ", today.getTime(), " entered: ", enterData.getTime())
    setAge(calculateAge(today.getTime(),enterData.getTime()));

    }

   
    if (process.env.NODE_ENV ==='production'){
      console.log("today: ", today.getTime(), " entered: ", enterData.getTime())
      setAge(calculateYears(today,enterData));
    }
  }

 
 
  const changeDateHandler = (e) => {
    setEnterData(new Date(e.target.value))
  
  } 

  

  
  


  return (
    <>
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
  
    </>
    
  );
}

export default App;
