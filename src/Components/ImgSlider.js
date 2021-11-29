import data from '../JSON Files/caro.json'
const ImgSlider = (props) => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={data[0].backgroundImg} className="d-block w-100" alt="Not found" width="1440px" height="468px" />
            <div class="carousel-caption d-none d-md-block">
            <img className="img-fluid" src={data[0].titleImg} alt=""/>
              {/* <h2>{data[0].title}</h2> */}
              <br />
              <p>{data[0].description}</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={data[1].backgroundImg} className="d-block w-100" alt="..." width="1440px" height="468px" />
            <div class="carousel-caption d-none d-md-block">
              <img className="img-fluid" src={data[1].titleImg} alt=""/>
              {/* <h2>{data[1].title}</h2> */}
              <br />
              <p>{data[1].description}</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={data[2].backgroundImg} className="d-block w-100" alt="..."  width="1440px" height="468px" />
            <div class="carousel-caption d-none d-md-block">
            <img src={data[2].titleImg} alt=""/>
              {/* <h2>{data[2].title}</h2> */}
              <br />
              <p>{data[2].description}</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={data[3].backgroundImg} className="d-block w-100" alt="..." width="1440px" height="468px" />
            <div class="carousel-caption d-none d-md-block">
            <img src={data[3].titleImg} alt=""/>
              {/* <h2>{data[3].title}</h2> */}
              <br />
              <p>{data[3].description}</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={data[4].backgroundImg} className="d-block w-100" alt="..." width="1440px" height="468px" />
            <div class="carousel-caption d-none d-md-block">
            <img src={data[4].titleImg} alt=""/>
              {/* <h2>{data[4].title}</h2> */}
              <br />
              <p>{data[4].description}</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ImgSlider;
