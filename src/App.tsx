import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div>
      <h1 className='underline text-center'>
        Intership Assignment
      </h1>
      <div className='flex flex-row justify-evenly items-center w-full h-screen'>
        <Link to='/task2'>Task 2</Link>
        <Link to='/task3'>Task 3</Link>
        <Link to='/task4'>Task 4</Link>
      </div>
    </div>
  )
}

export default App
