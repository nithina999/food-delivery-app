import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import ResCard from "./ResCard";

const Body = () => {
    const [data, setData] = useState([])
    const [searched, setSearched] = useState("");
    const [resetData, setResetData] = useState([]);

    const onlineStatus = useOnlineStatus();

    useEffect(()=>{
        mealData();
    }, [])

    const mealData = async () =>{
        const realdata = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4938662&lng=78.33088149999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await realdata.json();
        console.log(jsonData.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setData(jsonData.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setResetData(jsonData.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }

    const filteredRes = () => {
        const searchedData = data.filter(res => res.info.name.toLowerCase().includes(searched.toLowerCase()));
        setResetData(searchedData);
    };

    if(onlineStatus===false) return <h1>Looks like you are offline. Please check your internet connection</h1>
    
   
  return (
    <>
      <div className="container">
        <div className="search">
            <input type="search" className="border border-black" value={searched} onChange={(e)=>{
                setSearched(e.target.value)
            }}/>
            <button onClick={filteredRes}>Search</button>


          <button type="search" className=" bg-black rounded-lg px-4 py-2 m-2 text-white" onClick={()=>{
            let filteredData = data.filter(res=>res.info.avgRatingString>4)
            console.log(filteredData)
            setResetData(filteredData)
          }} >Top Rated</button>
        </div>
        <div className="card-container">
          {resetData.map((restaurant) => (
            <Link to={"/restaurant/" + restaurant.info.id}>
            <ResCard resData={restaurant}/>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
