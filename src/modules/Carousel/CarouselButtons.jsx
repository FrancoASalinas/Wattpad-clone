export default function CarouselButtons({ onClick, current }) {
  return (
    <div className="carousel__buttons-container">
      <button
        className="carousel__button--next"
        onClick={onClick}
        value={'next'}
      >
        &gt;
      </button>
      <div className="carousel__index-buttons">
        <Button current={current} value={0} onClick={onClick} />
        <Button current={current} value={1} onClick={onClick} />
        <Button current={current} value={2} onClick={onClick} />
        <Button current={current} value={3} onClick={onClick} />
        <Button current={current} value={4} onClick={onClick} />
      </div>
    </div>
  );
}

function Button({ onClick, value, current }) {
  return (
    <button
      className={`carousel__index-buttons__button ${
        current === value ? 'active' : ''
      }`}
      onClick={onClick}
      value={value}
    ></button>
  );
}
