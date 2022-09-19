import '../App.css';
import Principal from '../img/principal.jpeg';

function Banner() {
  return (
    <div className="container pt-4 pb-4">
      <div>
        <img src={Principal} class="d-block w-100" alt="..."></img>
      </div>
    </div>
  );
}

export default Banner;