import React from "react";
import voice_search from './assert/logo.jpeg';
import avatar from './assert/User.png';
import logo from './assert/Music-Logo.png'

const HeaderCompoent = () => (
    <div id="Header" className="HeaderClass">
        <ImgComponent image={logo} width={'50px'} height={'50px'}/>

        <SearchComponent>            
        </SearchComponent>

        <ImgComponent image={avatar} width={'35px'} height={'35px'}/>
    </div>
);

const ImgComponent = (prop) => {
    return (
        <div id={prop.image} className="LogoClass">
        <img width={prop.width} height={prop.height} src={prop.image} alt="This is a logo" />
        </div>        
    );    
};

const SearchComponent = () => {
    return (
        <div id="Search" className="SearchClass">
            <input type="search" value="" placeholder="Search Voices Here..."/>

            <ImgComponent image={voice_search} width={'25px'} height={'25px'} />
           
        </div>
    )
};

export default HeaderCompoent;

