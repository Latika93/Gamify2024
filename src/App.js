import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className='justify-center'>
      <Card name={"Questions"} score={0}/>
      <Card name={"Connects"} score={5}/>
      <Card name={"Interview Quest"} score={0}/>
      <Card name={"Questions"} score={0}/>
    </div>
  );
}

export default App;
