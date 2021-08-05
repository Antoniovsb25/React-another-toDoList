import ToDo from './components/ToDo'


function App() {
  return (
    <>
    <h1 className='title'>My To Do list</h1>
    <div className="div1">
      <ToDo text='Learn React' />
      <ToDo text='Master React' />
      <ToDo text='Learn Node' />
      <ToDo text='Master Node' />
    </div>
    </>
  );
}

export default App;
