import React from 'react'
import "./AllCategories.css"
import { Carousel, CarouselItem } from 'react-bootstrap'
import Img14 from "../../assets/romance.png";
import Swipe from './Swipe';


const AllCategories = () => {
    return (
        <div className='all-categories' id='all-categories'>
            <div className='category-title'>
                <h3>Top</h3>
                <h3 style={{ color: "blue" }}>Categories</h3>
            </div>
            <div className='carousel-container'>
                <Swipe />
            </div>
        </div>
    )
}

export default AllCategories