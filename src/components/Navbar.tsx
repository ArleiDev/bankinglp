import { Button } from './ui/button'
import logo from '../assets/imgs/logo.png'
const Navbar = () => {
  return (
    <div className='flex justify-around w-full h-14 bg-zinc-950'>
      <div className=' flex items-center '>
        <img className='h-14' src={logo} alt=""  />
      </div>
      <div className='flex items-center text-green-400 border-b border-green-500 mb-1 rounded-2xl px-10'>
        <ul className='flex items-center space-x-6'>
          <li className='hover:scale-110 transition-all duration-200 cursor-pointer'>Home</li>
          <li className='hover:scale-110 transition-all duration-200 cursor-pointer'>About</li>
          <li className='hover:scale-110 transition-all duration-200 cursor-pointer'>Services</li>
          <li className='hover:scale-110 transition-all duration-200 cursor-pointer'>Contact</li>
        </ul>
      </div>
      <div className='items-center flex'>
        <Button className='bg-zinc-950 w-32  text-green-400 border-green-500 border hover:drop-shadow-xl hover:transition-all hover:duration-700 hover:shadow-green-500'>Get App</Button>
      </div>
    </div>
  )
}

export default Navbar
