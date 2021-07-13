import logo from './Vector.png';
import logo1 from './foto1.png';
import logo2 from './foto.png';


import './App.css';

function App() {
  return (

    <heder>
      <div className="container py-3 d-flex align-atims-center justify-content-between ">
        <div className="d-flex align-atims-center  ">
          <h5>bandname</h5>
          <ul className="d-none d-lg-flex ">
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="d-flex  align-atims-center">
          <a href="#" className="btn text-primary fw-bold">Logn</a>
          <a href="#" className="btn btn-primary fw-bold">become a member</a>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center  nav">
          <div className="col-10 col-md-6">
            <h1 className="text-center mb-5">Creating a Beautifull & Usefull Solutitons</h1>
            <p className="text-center mb-5">We know how large objects will act, but things on a
              small scale just do not act that way.</p>
            <div className="text-center">
              <button className="btn btn-primary">Get Quote Now</button>
              <button className="btn btn-light">Learn More</button>
            </div>

          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row justify-content-center text-center  nav">
          <div className="col-10 col-md-4">
            <h2>Better Strategy With  Quality Business</h2>
            <p>Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row nav">
          <div className="col-12 col-sm-6 col-md-4">
            <div className="box d-flex align-item-center justify-content-between">
              <img src={logo} className="foto" />
              <div> <p>Investment Trading</p>
                <p>the quick fox jumps over the
                 lazy dog</p></div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="box d-flex align-item-center justify-content-between">
              <img src={logo} className="foto" />
              <div> <p>Investment Trading</p>
                <p>the quick fox jumps over the
                 lazy dog</p></div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="box d-flex align-item-center justify-content-between">
              <img src={logo} className="foto" />
              <div> <p>Investment Trading</p>
                <p>the quick fox jumps over the
                 lazy dog</p></div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="box d-flex align-item-center justify-content-between">
              <img src={logo} className="foto" />
              <div> <p>Investment Trading</p>
                <p>the quick fox jumps over the
                 lazy dog</p></div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="box d-flex align-item-center justify-content-between">
              <img src={logo} className="foto" />
              <div> <p>Investment Trading</p>
                <p>the quick fox jumps over the
                 lazy dog</p></div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="box d-flex align-item-center justify-content-between">
              <img src={logo} className="foto" />
              <div> <p>Investment Trading</p>
                <p>the quick fox jumps over the
                 lazy dog</p></div>
            </div>
          </div>

        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center  nav">
          <div className="col-10 col-md-4 text-center">
            <h2>What Clients Say</h2>
            <p>Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics </p>

          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex align-item-center justify-content-between wate">
              <img src={logo1} />
              <div>
                <h4>Regina Miles</h4>
                <p>This proved to be impossible using
                concepts of space and time. Einstein
                  new view of time first and then</p>
              </div>
            </div>

          </div>
          <div className="col-md-6">
            <div className="d-flex align-item-center justify-content-between wate">
              <img src={logo2} />
              <div>
                <h4>Regina Miles</h4>
                <p>This proved to be impossible using
                concepts of space and time. Einstein
                     new view of time first and then</p>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-6">
            <div className=" ">
              <h2>About Us</h2>
              <p>Problems trying to resolve the conflict between
             the two major realms of Classical physics: Newtonian mechanics </p>
            </div>

          </div>
        </div>
      </div>

    </heder>


  );
}

export default App;
