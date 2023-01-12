  import logo from '../../../IMG/Logo/logo.png';

import {BiSearchAlt} from 'react-icons/bi';
import {IoHelpBuoyOutline} from 'react-icons/io5';
import { TbDiscount2 } from "react-icons/tb";
import {VscAccount} from 'react-icons/vsc';
import {AiOutlineShoppingCart} from 'react-icons/ai';

const HeaderCompoenent = () => {
    return (
       <div className='headerComponent'>
           <Title/>
           <NavBar/>
       </div>
    );
}

const Title = () => {
    return (
        <div className='Title'>
            <img src={logo} alt="" />
            <h2>Bhojanalayam</h2>
        </div>
    );
}

const NavBar = () => {
    return(
        <div className='NavBar'>
           
        <ul>
            {/* <li key='1' className='Search'> <BiSearchAlt/>  Search</li> */}
            <li key='1'> <TbDiscount2/> Offer</li>
            <li key='2'> <IoHelpBuoyOutline/>Help</li>
            <li key='3'> <VscAccount/> Gandhi</li>     
            <li key='4'> <AiOutlineShoppingCart/> Cart</li>       
        </ul>
        </div>        
        
    );
}

export default HeaderCompoenent;