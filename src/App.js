import React, {useState, useEffect}  from "react";
import axios from "axios";
import NasaCard from "./components/NasaCard";
import "./App.css";


function App() {
  const [image, setImage] = useState([]);
  const [date, setDate] = useState([]);
  const [exp, setExp] = useState([]);
  const [title, setTitle] = useState([]);


  //this handles when a user updates the year,month,day
  const [count, setCount] = useState(2019);
  const [countDay, setCountDay] = useState(12);
  const [countMonth, setCountMonth] = useState(12);

  //this handles the state of the year, month, day
  const [year, setYear] = useState("2015");
  const [month, setMonth] = useState("01");
  const [day, setDay] = useState("29");

  

  //Handler to be attached to an input field
  const dateChange = newDate => {
    setDate(newDate);
  };

  //useEffect
  useEffect(() => {
    axios
      .get(
        // `https://api.nasa.gov/planetary/apod?api_key=Zvl5xxpAZPY9yEykBAm0obLYcToO8pKnujJ0yeH3&date=${year}-${month}-${day}`
        `https://api.nasa.gov/planetary/apod?date=${date}&api_key=Zvl5xxpAZPY9yEykBAm0obLYcToO8pKnujJ0yeH3`
      )
      .then(res => {
        setImage(res.data.url);
        setExp(res.data.explanation);
        setTitle(res.data.title);
        setDate(res.data.date);
       
      })
      .catch(err => console.log(err));
  }, []);







  return (
    <div className="App">
      <h1>Photo of the Day!</h1>
      <NasaCard
        primary= {false}
        image={image}
        date={date}
        title={title}
        exp={exp}
        dateChange={() => dateChange(document.getElementById("date").value)}
      />
    </div>
  );
}

export default App;
