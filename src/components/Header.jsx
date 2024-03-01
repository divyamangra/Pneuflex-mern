import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center mx-auto p-3'>
        <Link to='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-slate-500'>Pnueflex</span>
                <span className='text-slate-700'>Inc</span>
            </h1>
        </Link>
        <form className='bg-slate-100 rounded-lg flex p-2 items-center'>
            <input type='text' placeholder='Search....' className='bg-transparent focus:outline-none'/>
            <FaSearch className='text-slate-600'/>
        </form>
        <ul className='flex gap-4 text-slate-600'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/About'><li>About</li></Link>
        <Link to='/SignIn'><li>Sign In</li></Link>
        </ul>
        </div>
    </header>
  )
}
