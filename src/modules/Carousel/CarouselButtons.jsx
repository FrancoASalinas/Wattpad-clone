export default function CarouselButtons({onClick}){
    return(
    <div className="carousel__buttons-container">
        <button className='carousel__button--next' onClick={onClick} value={'next'}>&gt;</button>
        <div className='carousel__index-buttons'>
            <button className='carousel__index-buttons__button' onClick={onClick} value={0}></button>
            <button className='carousel__index-buttons__button' onClick={onClick} value={1}></button>
            <button className='carousel__index-buttons__button' onClick={onClick} value={2}></button>
            <button className='carousel__index-buttons__button' onClick={onClick} value={3}></button>
            <button className='carousel__index-buttons__button' onClick={onClick} value={4}></button>
        </div>
    </div>
    )
}