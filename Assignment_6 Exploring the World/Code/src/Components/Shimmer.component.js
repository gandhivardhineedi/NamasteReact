import {IMG_URL} from '../constants.js';
import { AiFillStar} from 'react-icons/ai';

const ShimmerRestaurantCard = () => {
    return(
            <div className='Card'>
                <div className='CardImg skeleton'>
                    
                </div>
                <div className='CardTitle'>
                    <div className='skeleton skeleton-text'></div>
                    <br />
                    <div className='skeleton skeleton-text'></div>
                </div>
                <div className='CardDetails'>
                    <div className='skeleton skeleton-text-sub'></div>
                    <br />
                    <div className='skeleton skeleton-text-sub'></div>
                </div>
                <div></div>

                <span className='ribbon skeleton'>
                    <AiFillStar/>
                    {'--'} 
                </span>
            </div>
    );
}

const ShimmerComponent = () => (
    <>
        <div className='RestaurantCard'>
            
                  {
                    ShimmerCards(8).map(card => {return (
                        <ShimmerRestaurantCard key={card}/>
                    )})
                  }
                                                                                              
        </div>
    </>
)

const ShimmerCards = (maxCount) => {
   let cards = [];
    for(let i=0; i<maxCount; i++){        
        cards.push(i);
    }

    return cards;
    
}

export default ShimmerComponent;

