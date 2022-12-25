// import { FaGithub } from 'react-icons/fa'

// function Navbar({ title }) {
//   return (
//     <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
//       <div className='container mx-auto'>
//         <div className='flex-none px-2 mx-2'>
//           <FaGithub className='inline pr-2 text-3xl' />
//           <link to='/' className='text-lg font-bold align-middle'>
//             {title}
//           </link>
//         </div>

//         <div className='flex-1 px-2 mx-2'>
//           <div className='flex justify-end'>
//             <link to='/' className='btn btn-ghost btn-sm rounded-btn'>
//               Home
//             </link>

//             <link to='/' className='btn btn-ghost btn-sm rounded-btn'>
//               About
//             </link>


//             <link to='/' className='btn btn-ghost btn-sm rounded-btn'>
//               Contact
//             </link>
//           </div>
//         </div>
//       </div>
//     </nav>

//   )
// }

// Navbar.defaultProps = {
//   title: 'Github Finder',
// }

// Navbar.prototype = {
//   // eslint-disable-next-line no-undef
//   title: ProTypes.string,
// }

// export default Navbar;

import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({ title }) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <FaGithub className='inline pr-2 text-3xl' />
          <Link to='/' className='text-lg font-bold align-middle'>
            {title}
          </Link>
        </div>

        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
              Home
            </Link>
            <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder',
}

Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar