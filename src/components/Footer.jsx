import '../App.css';

function Footer(props) {
  return (
    <div className="Footer">
            <footer class="py-5 bg-dark">
    <div className="container">
      <p className="m-0 text-center text-white">{props.footer}</p>
    </div>
  </footer>
    </div>
  );
}

export default Footer;