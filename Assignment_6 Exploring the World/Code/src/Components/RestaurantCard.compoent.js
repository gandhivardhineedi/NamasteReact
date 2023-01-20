import {IMG_URL} from '../constants.js';
import { AiFillStar} from 'react-icons/ai';

const RestaurantCard = ({name, cloudinaryImageId, cuisines, avgRating, deliveryTime, costForTwoString, aggregatedDiscountInfo}) => {
    return(
            <div className='Card'>
                <div className='CardImg'>
                    <img src={IMG_URL + cloudinaryImageId}/>
                </div>
                <div className='CardTitle'>
                    <span className='Name'>{name}</span>
                    <br />
                    <span className='Cuisines'>{cuisines.join(', ')}</span>
                </div>
                <div className='CardDetails'>
                    {deliveryTime} | {costForTwoString} 
                </div>
                <div></div>

                <span className='ribbon' style={ {'background' : +avgRating > 3.5 ? '#48c479' : +avgRating > 2.5 ? '#db7c38' : +avgRating > 0? 'red' : 'grey'} }>
                    <AiFillStar/>
                    {avgRating} 
                </span>
            </div>
    );
}

export default RestaurantCard;

