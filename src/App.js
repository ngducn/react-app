import './App.css';
import { useState } from "react";
import Form from './Form';


function App() {
  const [dataForm, setValue] = useState({name: "", age: "", date: new Date(), email: "", number: "", essay: ""});
  
  return (
    <div className="App">
       <Form dataForm={dataForm} setValue={setValue}/>
    </div>
  );
}

export default App;
