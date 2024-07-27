import React from 'react'
import { useContext } from 'react'
import UserContext from '../utils/UserContext'

const ResCard = ({resData}) => {

    const {loggedInUser} = useContext(UserContext)
  return (
    <div className="card" key={resData.info.id}>
              <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} />
              <p>{resData.info.name}</p>
              <p>{resData.info.costForTwo}</p>
              <p>{resData.info.avgRatingString}</p>
              <p>{loggedInUser}</p>

    </div>
  )
}

export default ResCard