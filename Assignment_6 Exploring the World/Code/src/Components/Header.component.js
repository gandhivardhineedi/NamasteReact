  import logo from '../../../IMG/Logo/logo.png';

import {BiSearchAlt} from 'react-icons/bi';
import {IoHelpBuoyOutline} from 'react-icons/io5';
import { TbDiscount2 } from "react-icons/tb";
import {VscAccount} from 'react-icons/vsc';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { useState } from 'react';

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

const LogInSetUp = (setUseLoginDeatils) => {
   
    return(
        // <div className=' AuthContainer'>
        <>
            <button className='LoginButton AuthButton' onClick={() => setUseLoginDeatils(true)}>
             {'Log In'}
            </button>
            <button className='SignUpButton AuthButton' onClick={() => setUseLoginDeatils(true)}>
                {'Sign UP'}
            </button>
        </>
        // </div>        
    )
}

const LogOutSetUp = (setUseLoginDeatils) => {  
    return(
        // <div className='LogOutButton AuthContainer'>
            <button className='LogOutButton AuthButton' onClick={() => setUseLoginDeatils(false)}>
             {'Log Out'}
            </button>           
        // </div>        
    )
}










const NavBar = () => {

    let [useLoginDeatils,setUseLoginDeatils] = useState(false); 
       
    return(
        <div className='NavBar'>
           
        <ul>
            {/* <li key='1' className='Search'> <BiSearchAlt/>  Search</li> */}
            <li key='1'> <TbDiscount2/> Offer</li>
            <li key='2'> <IoHelpBuoyOutline/>Help</li>    

            {(!useLoginDeatils) ?
                <li key='3'>
                    {/* <LogInSetUp {...setUseLoginDeatils}/> */}
                    <>
                        <button className='LoginButton AuthButton' onClick={() => setUseLoginDeatils(true)}>
                        {'Log In'}
                        </button>
                        <button className='SignUpButton AuthButton' onClick={() => setUseLoginDeatils(true)}>
                            {'Sign UP'}
                        </button>
                    </>
                </li>
            
                :
                <>
                    <li key='4'>
                        <VscAccount/> Gandhi
                    </li>
                    <li key='5'>
                    <button className='LogOutButton AuthButton' onClick={() => setUseLoginDeatils(false)}>
                    {'Log Out'}
                    </button>   
                    </li>
                </>
                
            }
            <li key='6'> <AiOutlineShoppingCart/> Cart</li>       

        </ul>
        </div>        
        
    );
}

export default HeaderCompoenent;
