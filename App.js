
import './App.css';

const fruits = [
  {title: 'Apple', price: 150, iaAvailable: true},
  {title: 'Banana', price: 50, isAvailable: true},
  {title: 'Orange', price: 99, isAvailable: false},
  {title: 'Grapes', price: 200, isAvailable: true},
  {title: 'Mange', price: 299, isAvailable: false}
]

function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {fruits.map((fruit, index) => (
            <tr key={index} style={{backgroundColor: fruit.isAvailable ? "white" : "red"}}> 
              <td>{fruit.title}</td>
              <td>{fruit.price}</td>
              <td>{fruit.iaAvailable ? "Yes" : "Not"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
