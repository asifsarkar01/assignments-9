import { key } from 'localforage';
import moment from 'moment';
import { Input } from 'postcss';
import React from 'react';


const FeedBackData = ({feedBackData}) => {
    
    return (
        <div className='w-10/12 mx-auto'>
            <h1>Feedback Product:( {feedBackData.length} )</h1>
{
    feedBackData.map(feed => <div className=" mb-4 card bg-base-100 w-96 shadow-xl">
      
        <div className="card-body">
            <div className='flex gap-x-4 items-center'>
                <img className='w-20 rounded-full object-cover' src={feed.useImg} alt="" />
            <h2 className="card-title">{feed.name}</h2>
            <p className='text-xs'>{moment().format("MMM.Do.YY")}</p>
            </div>
          
          <p title={feed.review}>{feed.review.slice(0,100)}...</p>
          <div className="card-actions justify-end items-center">
          <div className="rating">
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
</div>
            <button className="btn btn-error">Review</button>
          </div>
        </div>
      </div>)
}
        </div>
    );
};

export default FeedBackData;