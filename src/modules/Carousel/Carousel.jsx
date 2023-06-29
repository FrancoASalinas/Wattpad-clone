import { useState } from 'react';
import carouselProps from './carouselProps';
import CarouselButtons from './CarouselButtons.jsx';
export default function Carousel() {
  const [currentCarouselItem, setCurrentCarouselItem] = useState(0);

  const CarouselItemTemplate = ({ src, text1, author, text2 }) => {
    return (
      <div className="carousel__item">
        <img className="carousel__item__img" src={src} />
        <div className="carousel__item__details">
          <span className="carousel__item__quotes"></span>
          <p className="carousel__item__description">{text1}</p>
          <p className="carousel__item__author">{author}</p>
          <p className="carousel__item__author-desc">{text2}</p>
        </div>
        <button className="carousel__item__button">Start Reading</button>
      </div>
    );
  };

  function withNewProps(Component, props) {
    function WrapperComponent() {
      return <Component {...props} />;
    }
    return WrapperComponent;
  }

  const CarouselItem1 = withNewProps(CarouselItemTemplate, carouselProps[0]);
  const CarouselItem2 = withNewProps(CarouselItemTemplate, carouselProps[1]);
  const CarouselItem3 = withNewProps(CarouselItemTemplate, carouselProps[2]);
  const CarouselItem4 = withNewProps(CarouselItemTemplate, carouselProps[3]);
  const CarouselItem5 = withNewProps(CarouselItemTemplate, carouselProps[4]);

  function styleSwitch() {
    let translatePosition = '0';
    switch (currentCarouselItem) {
      case 0:
        translatePosition = '0';
        break;
      case 1:
        translatePosition = '20';
        break;
      case 2:
        translatePosition = '40';
        break;
      case 3:
        translatePosition = '60';
        break;
      case 4:
        translatePosition = '80';
        break;
    }
    return `carousel translate${translatePosition}`;
  }

  return (
    <article className="container-carousel">
      <div className={styleSwitch()}>
        <CarouselItem1 />
        <CarouselItem2 />
        <CarouselItem3 />
        <CarouselItem4 />
        <CarouselItem5 />
      </div>
      <CarouselButtons onClick={handleClick} current={currentCarouselItem} />
    </article>
  );

  function handleClick(e) {
    switch (e.target.value) {
      case 'next':
        setCurrentCarouselItem((prev) => (prev === 4 ? (prev = 0) : prev + 1));
        break;
      case '0':
        setCurrentCarouselItem(0);
        break;
      case '1':
        setCurrentCarouselItem(1);
        break;
      case '2':
        setCurrentCarouselItem(2);
        break;
      case '3':
        setCurrentCarouselItem(3);
        break;
      case '4':
        setCurrentCarouselItem(4);
        break;
    }
  }
}
