import './App.css';
import food1 from "./images/food1.jpg";
import food2 from "./images/food2.jpg";
import food3 from "./images/food3.jpg";

function App() {
  return (
    <div className="body">

        <div className="flex-container">
          <div className="flex-item-image">
            <img src={food1} alt="food 1"/>
          </div>
        </div>

        <div className="flex-container">
          <div className="flex-item-text">
            <p>← My friends and I made this food.</p>
          </div>
        </div>

        <div className="flex-container">
          <div className="flex-item-image">
            <img src={food2} alt="food 2"/>
          </div>
        </div>

        <div className="flex-container">
          <div className="flex-item-text">
            <p>← This dish is from my grad trip to Portland.</p>
          </div>
        </div>

        <div className="flex-container">
          <div className="flex-item-image">
            <img src={food3} alt="food 3"/>
          </div>
        </div>

        <div className="flex-container">
          <div className="flex-item-text">
            <p>← Here is the table from South Philly Barbacoa.</p>
          </div>
        </div>

    </div>
  );
}

export default App;
