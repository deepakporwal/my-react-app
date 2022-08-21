import './App.css';
import Header from './Components/Header';
import {Footer}  from './Components/Footer';
import {Todos}  from './Components/Todos';
import { Sidebar} from './Components/Sidebar'
import { Counter } from './Counter';

function App() {
  
   // const onDelete = ()=>{
   //    console.log('I am on delete');
   // }

  let todosData = [
   {
      sno : 1,
      title : "Go to market",
      desc : "you need to go the market"
   },
   {
      sno : 2,
      title : "Learn react",
      desc : "you need to learn react"
   }
]

  return (
     <div className="App">
        <Header  />    
        <Todos todos={todosData}  />
        <Sidebar/>
        <Counter />
        <Footer/>
     </div>
  );
}

export default App;
