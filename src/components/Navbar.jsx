import { IoHome } from "react-icons/io5";
import { MdAssignmentLate } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { Link } from "react-router";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

function Navbar() 
{

return <div className="nav">
 <img className="logo" src="logo.jpg" alt="logo" />
 <div className="nav-links">
    <Link to="/Body" className="tx"><IoHome /> Home</Link>
    <Link to="/About" className="tx"><MdAssignmentLate/>About</Link>
    <Link to="/Contact" className="tx"><IoIosContacts/>Contact</Link>
 
    <SignedOut>
                     <SignInButton />
                 </SignedOut>
                 <SignedIn>
                     <UserButton />
                 </SignedIn>
  </div>
</div>
}
export default Navbar;

