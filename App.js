import logo from "./logo.svg";
import "./App.css";

const user = [
  { name: 'Agniezka', age: 32 },
  { name: 'Marek', age: 71 },
  { name: 'Zigmund', age: 45 }
]

const product = [
  {title: 'Apple', cost: 110, availability: 12 },
  {title: 'Tomato', cost: 90, availability: 10 },
  {title: 'Orange', cost: 100, availability: 22 },
]

const rows = user.map(user => {
  return(<tr><td>{ user.name } is {user.age} years old</td></tr>)
})

const rows1 = product.map(product => {
  return (<tr><td>{ product.title }</td><td>{product.cost}</td><td>{product.availability}</td></tr>)
})
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
       <table border="1px" bgcolor='black'>
        {rows}
       </table>
       <table border="1px">
        <tr>
          <td>Title</td>
          <td>Cost</td>
          <td>Availability</td>
        </tr>
        {rows1}
       </table>
      </header>
    </div>
  );
}

export default App;
