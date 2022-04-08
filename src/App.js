// import logo from './logo.svg';
import './App.css';

function App() {
  const os=["Android","Blackberry","iPhone","Windows Phone"]
  return (
    <div className="App">
      <h1 id="title">REACT MOBILE OS</h1>
        <div id="mos">
         <h1>Mobile Operting System:</h1> 
          <ul>
            {
              os.map((e)=>{
                return <li>{e}</li>
              })
            }
          </ul>
        </div>
        <div id="mos2">
          <h1>Mobile Manufacturers:</h1>
            <ul id="sq">
              <li>Samsung</li>
              <li>HTC</li>
            </ul>
            <ul>
              <li>Microsoft
                <ul>
                  <li>Apple</li>
                </ul>
              </li>
            </ul>
        </div>
    </div>
  );
}

export default App;
