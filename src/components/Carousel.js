import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import noPoster from '../images/no-movie-poster.jpg';


const handleDragStart = (e) => e.preventDefault();



const Carousel = ({movies}) => {
    const items = movies?.map((movie) => (
        <div className="carouselItem">
            {movie.backdrop_path === null ?
            <img src={noPoster} alt="No Poster" /> :
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
                alt={`${movie.title} Poster`}
                onDragStart={handleDragStart}
                className="carouselItem-img" />
            }
        </div>
    ));

    const responsive = {
        0 : {
            items: 3,
        },
        512: {
            items: 2,
        },
        1024: {
            items: 1,
        },
    };

  return (
    <AliceCarousel 
        activeIndex={10}
        autoPlay
        autoPlayStrategy='none'
        autoPlayInterval={4000} 
        responsive={responsive} 
        infinite
        animationType='fadeout' 
        disableDotsControls 
        disableButtonsControls 
        mouseTracking 
        items={items} />
  );
}
export default Carousel;