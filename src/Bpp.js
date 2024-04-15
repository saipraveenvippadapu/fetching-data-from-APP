function Bpp({ title, image, price, rating }) {
  return (
    <>
      <div className="card">
        <p>{title}</p>
        <img src={image} />
        <p>${price}</p>
        <p>{rating.rate}</p>
      </div>
    </>
  );
}
export default Bpp;
