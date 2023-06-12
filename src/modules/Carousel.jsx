import {useState} from 'react'
export default function Carousel(){

    const [currentCarouselItem, setCurrentCarouselItem] = useState(0);


    const CarouselItemTemplate = ({src, text1, author, text2, }) =>
    {
        return (
            
                <div className='carousel__item'>
                    <img className="carousel__item__img" src={src} />
                    <div className="carousel__item__details">
                        <span className='carousel__item__quotes'></span>
                        <p className='carousel__item__description'>{text1}</p>
                        <p className='carousel__item__author'>{author}</p>
                        <p className='carousel__item__author-desc'>{text2}</p>
                    </div>
                    <button className='carousel__item__button'>Start Reading</button>
                </div>
        )
    }

    function withNewProps(Component, props){



        function WrapperComponent(){
            return <Component {...props} />
        }
        return WrapperComponent
    }

    const CarouselItem1 = withNewProps(CarouselItemTemplate, {
        src: 'https://www.wattpad.com/img//landing/black-eye.png',
        text1: 'Being a Wattpad Star is the foundation for everything I do as a writer, from the behind the scenes wrangling to the big, game-changing projects.',
        author: 'BEN SOBIECK (@BENSOBIECK)',
        text2: 'Benjamin Sobieck is a Wattpad Star and editor of “The Writer’s Guide to Wattpad,” published in August 2018 by Writer’s Digest Books and featuring contributions by 23 Wattpad Stars, ambassadors, and staff. His stories on Wattpad, such as “When the Black-Eyed Children Knock,” have drawn more than 1.5 million reads.'
    })
    const CarouselItem2 = withNewProps(CarouselItemTemplate, {
        src: 'https://www.wattpad.com/img//landing/feather.png',
        text1: 'Having been active on Wattpad for several  years, I knew it would be the perfect platform for a thriller with lots of cliffhangers for readers to discuss. Teen horror is my passion, so I can’t wait to be able to share Light as a Feather with other horror aficionados on Hulu.',
        author: 'ZOE AARSEN (@ZAARSENIST)',
        text2: 'Zoe Aarsen is a graphic designer and copywriter. Her first paranormal YA novel, Light as a Feather, Stiff as a Board, is being published by Simon &amp; Schuster and turned into a television series on Hulu.'
    })
    const CarouselItem3 = withNewProps(CarouselItemTemplate,{
        src: 'https://www.wattpad.com/img//landing/chasing-red.png',
        text1: 'The Wattpad Stars Program gave me opportunities I never thought possible. It connected me to a world that I had only imagined. I don’t know how else to say it. It changed my life!',
        author: 'ISABELLE RONIN (@ISABELLERONIN)',
        text2: 'Chasing Red was one of 2016’s most-read stories on Wattpad -- and that was just the beginning for this Winnipeg-Manitoba-based writer. In a single year, her explosive hit has racked up over 127 million reads on Wattpad. Newly edited and expanded, the book was split into two and hit bookstore shelves in 2017.'
    })
    const CarouselItem4 = withNewProps(CarouselItemTemplate, {
        src: 'https://www.wattpad.com/img//landing/white-stag.png',
        text1: 'Working with Wattpad Studios is like a dream. Not only do they care about your success, but also staying true to your vision.',
        author: 'KARA BARBIERI (@PANDEAN)',
        text2: 'Kara Barbieri is a twenty-two year old author with a love for the weird and mystic. Her debut novel, WHITE STAG, will be published by Wednesday Books/Macmillan in January 2019.'
    })
    const CarouselItem5 = withNewProps(CarouselItemTemplate, {
        src: 'https://www.wattpad.com/img//landing/walter-boys.png',
        text1: 'When I joined Wattpad, I gained a second family who were as passionate about reading and writing as I am.',
        author: 'ALI NOVAK (@FALLZSWIMMER)',
        text2: 'Ali Novak is a Wisconsin native and a graduate of the University of Wisconsin-Madison\'s creative writing program. She started writing her debut novel My Life with the Walter Boys when she was only fifteen. Since then, her work has received more than 150 million hits online and My Life with the Walter Boys has been optioned for television by Komixx Entertainment and Sony Pictures Television.'
    })

    function styleSwitch(){
        let translatePosition = '0';
        switch(currentCarouselItem){
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
        console.log(translatePosition)
        return `carousel--${translatePosition}`
    }
    
    return(
        <article className="container-carousel">
            <div className={styleSwitch()} >
                    <CarouselItem1 /> 
                    <CarouselItem2 /> 
                    <CarouselItem3 /> 
                    <CarouselItem4 /> 
                    <CarouselItem5 />
            </div>
            <CarouselButtons onClick={handleClick} />
        </article>
            
    )

    function handleClick(){
        switch(currentCarouselItem){
            case 0:
                setCurrentCarouselItem(1);
                break;
            case 1:
                setCurrentCarouselItem(2);
                break;
            case 2:
                setCurrentCarouselItem(3);
                break;
            case 3:
                setCurrentCarouselItem(4);
                break;
            default:
                setCurrentCarouselItem(0);
                break;
        }
    }
}

function CarouselButtons({onClick}){
    return(
    <div className="carousel__buttons-container">
        <button className='carousel__button--next' onClick={onClick}>&gt;</button>
        <div className='carousel__index-buttons'>
            <button className='carousel__index-buttons__button'></button>
            <button className='carousel__index-buttons__button'></button>
            <button className='carousel__index-buttons__button'></button>
            <button className='carousel__index-buttons__button'></button>
            <button className='carousel__index-buttons__button'></button>
        </div>
    </div>
    )
}