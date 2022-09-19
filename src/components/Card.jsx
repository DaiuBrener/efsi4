import '../App.css';



function Card(props) {
  return (
    <div className="Body">
       <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-12 my-2">
        <div className="card box-shadow campus-boxes">
          <div className="card-header">
           {props.title}
          </div>
          <div className="card-body">
            <img className="img-fluid mb-3" src={props.img} alt="Inscripcion"></img>
            <p>{props.text}</p>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-sm-12 my-2">
        <div className="card box-shadow campus-boxes">
          <div className="card-header">
            {props.title}
          </div>
          <div className="card-body">
          <img className="img-fluid mb-3" src={props.img} alt="Inscripcion"></img>
            <p>{props.text}</p>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-12 my-2">
        <div className="card box-shadow campus-boxes">
          <div className="card-header">
            {props.title}
          </div>
          <div className="card-body">
          <img className="img-fluid mb-3" src={props.img} alt="Inscripcion"></img>
            <p>{props.text}</p>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-12 my-2">
        <div className="card box-shadow campus-boxes">
          <div className="card-header">
            {props.title}
          </div>
          <div className="card-body">
          <img className="img-fluid mb-3" src={props.img} alt="Inscripcion"></img>
            <p>{props.text}</p>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-sm-12 my-2">
        <div className="card box-shadow campus-boxes">
          <div className="card-header">
            {props.title}
          </div>
          <div className="card-body">
          <img className="img-fluid mb-3" src={props.img} alt="Inscripcion"></img>
            <p>{props.text}</p>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-12 my-2">
        <div className="card box-shadow campus-boxes">
          <div className="card-header">
            {props.title}
          </div>
          <div className="card-body">
          <img className="img-fluid mb-3" src={props.img} alt="Inscripcion"></img>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default Card;
