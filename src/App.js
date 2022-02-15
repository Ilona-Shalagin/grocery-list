import imageTwo from './man.jpg'
import image from './image.jpg'
import './App.css';
import { GroceryList } from './GroceryList.js'


function App() {
  return (
    <div className="app">
      <div className="container">
    <img src={ image } alt="shopping" width="250px"/>
    </div>
    <div className="container">
    <h1>Grocery List</h1>
    </div>
    <GroceryList/>
    <div className="container">
    <img src={ imageTwo } alt="man" width="200px"/>
    </div>
    </div>
  );
}

export default App;
