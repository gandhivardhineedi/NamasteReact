import {ResturantData} from '../constants.js'
import RestaurantCard from './RestaurantCard.compoent.js';

import {BiSearchAlt} from 'react-icons/bi';
import { useState } from 'react';



const BodyCompoenent = () => {
    
    const [ restaurantList,setRestaurantList] = useState(ResturantData);
    const [searchTxt, setSeachTxt] = useState();
    return (
        <>
            <div className='SearchBar'>
                
                    <div id="Search" className="SearchClass">
                    <input type="search" value={searchTxt} placeholder="Search Here..."
                        onChange={(e)=> {                    
                            setSeachTxt(e.target.value);                        
                        }                        
                        }
                        
                        onClick={() => {  setRestaurantList(resetRestaurantList()) }}
                    />

                    <BiSearchAlt onClick={() => { setRestaurantList(filterRestaurant(restaurantList,searchTxt.toLowerCase()))}}/> 
                
                </div>

            </div>
            
            <div className='RestaurantCard'>
            {                
                    restaurantList.map( (resturant) => {
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
            <input type="search" value={searchTxt} placeholder="Search Here..."
                onChange={(e)=> {                    
                     setSeachTxt(e.target.value);
                     console.log(searchTxt);
                }
                }
            />

            <BiSearchAlt onClick={() => { setRestaurantList(filterRestaurant(restaurantList,searchTxt.toLowerCase()))}}/> 
           
        </div>
    )
};

const filterRestaurant = (filterData,filterTxt) => {
    return filterData.filter((restaurantData) => { return restaurantData.data.name.toLowerCase().includes(filterTxt)});
}

const resetRestaurantList = () => {
    return ResturantData;
}

export default BodyCompoenent;