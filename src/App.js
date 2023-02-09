import './App.css';
import { Class } from './Class';

function App() {
 const cName='Audi'
 const cModel='Q7'
 const cColor='Asphalt White'
 const cType='XUV'


  return (
    <div >
      <Class cName={cName} cModel={cModel} cColor={cColor} cType={cType}/>
     
    </div>
  );
}

export default App;
