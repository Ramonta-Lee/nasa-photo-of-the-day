import React, {useState, useEffect}  from "react";
import axios from "axios";
import NasaCard from "./components/NasaCard";
import "./App.css";


function App() {
  const [image, setImage] = useState([]);
  const [date, setDate] = useState([]);
  const [exp, setExp] = useState([]);
  const [title, setTitle] = useState([]);

  //Handler to be attached to an input field
  const dateChange = newDate => {
    setDate(newDate);
  };

  //useEffect
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${date}&api_key=Zvl5xxpAZPY9yEykBAm0obLYcToO8pKnujJ0yeH3`
      )
      .then(res => {
        setImage(res.data.url);
        setExp(res.data.explanation);
        setTitle(res.data.title);
        setDate(res.data.date);
      })
      .catch(err => console.log(err));
  }, [date]);


  return (
    <div className="App">
      <h1>Photo of the Day!</h1>
      <NasaCard
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
