import { Link } from "react-router-dom";

export default function Task2() {
  return (
    <div className='flex flex-row justify-evenly items-center w-full h-screen'>
      <Link to='/firstpage'>First Page</Link>
      <Link to='/protectedRoute'>Access Second Page</Link>
    </div>
  )
}
