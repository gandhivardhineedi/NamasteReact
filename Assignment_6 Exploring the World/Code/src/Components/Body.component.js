import {ResturantData} from '../constants.js'
import RestaurantCard from './RestaurantCard.compoent.js';
import ShimmerComponent from './Shimmer.component.js';

import {BiSearchAlt} from 'react-icons/bi';
import { useState,useEffect } from 'react';

import { MdOutlineCancel } from 'react-icons/md';

debugger;
console.log('pre-render');

const BodyCompoenent = () => {
    
    const [ allRestuarantList, setAllResturantList ] = useState([]);
    const [ filteredRestaurantList,setFilteredRestaurantList] = useState(ResturantData);
    const [searchTxt, setSeachTxt] = useState();

    debugger;
console.log('on-render');

    async function getResturantData() {

        debugger;
        console.log('1st re-render');


        let rawData = await window.fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6869192&lng=83.2185599&page_type=DESKTOP_WEB_LISTING');
     
        let jsonData = await rawData.json();

        console.log(jsonData)
     
        setAllResturantList(jsonData?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurantList(jsonData?.data?.cards[2]?.data?.data?.cards);
     }

    //we can't directly put async functions with in the call back it will give some exceptions.
    useEffect(() => {getResturantData()},[]);

    //useEffect()

    return (allRestuarantList.length === 0) ? 
    <ShimmerComponent/>
    : (
        <>
            <div className='SearchBar'>
                
                    <div id="Search" className="SearchClass">
                    <input type="text" value={searchTxt} placeholder="Search Here..."            

                        onChange={(e)=> {       
                            // https://www.codingdeft.com/posts/react-controlled-uncontrolled/
                            // we will get this error when we trying to change the undefined value (equvalent value of the not giving the value) to the input 
                            //so we are trying to convert it into from uncontrolled input to controlled input, it will give error at first time. but once it got assigned with some value from secondtime it won't give any error.

                            //React doesn't recommend switching an input between controlled and uncontrolled.

                            //in controlled input we make use of some state machine (local/global) to store the current value of the input.

                            //In the case of uncontrolled inputs, the value of the input field is stored in the DOM itself. We just pass a reference to the input and access the value of the input using the reference.
                            

                            setSeachTxt(e.target.value);                                            
                        }                        
                        }
                        
                        
                    />

                    <MdOutlineCancel style={{'visibility': (searchTxt?.length > 0) ? 'visible' : 'hidden'}} onClick={() => {  setSeachTxt(''); setFilteredRestaurantList(allRestuarantList) }}/> 
                    <BiSearchAlt onClick={() => { setFilteredRestaurantList(filterRestaurant(allRestuarantList,searchTxt.toLowerCase()))}}/> 
                
                </div>

            </div>
            
            <div className='RestaurantCard'>
            {                
                    filteredRestaurantList.map( (resturant) => {
                        return(
                            <RestaurantCard {...resturant.data} key={resturant.data.id}/>
                        );                       
                    })
            }
        </div>
        </>
        
    );
};

const SearchComponent = () => {

    const [searchTxt, setSeachTxt] = useState();

    return (
        <div id="Search" className="SearchClass">
            <input type="text" value={searchTxt} placeholder="Search Here..."
                onChange={(e)=> {                    
                     setSeachTxt(e.target.value);
                     console.log(searchTxt);
                }
                }
            />

            <BiSearchAlt onClick={() => { setFilteredRestaurantList(filterRestaurant(filteredRestaurantList,searchTxt.toLowerCase()))}}/> 
           
        </div>
    )
};

const filterRestaurant = (allData,filterTxt) => {

    console.log(allData);
    return allData.filter((data) => { return data?.data?.name.toLowerCase().includes(filterTxt)});
}

const resetFilteredRestaurantList = () => {
    return ResturantData;
}

export default BodyCompoenent;

