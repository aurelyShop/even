export function Arte(){
    return(
        <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="/rena.jpg" className="d-block w-100" style={{ height: '300px', objectFit: 'cover' }} alt="..." />

    </div>
    <div className="carousel-item">
    <img src="/dios.jpg" className="d-block w-100" style={{ height: '300px', objectFit: 'cover' }} alt="..." />

    </div>
    <div className="carousel-item">
    <img src="/ot.jpg" className="d-block w-100" style={{ height: '300px', objectFit: 'cover' }} alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
  <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="/Pacioli.jpg"
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Pintor</h5>
          <p className="card-text">Fray Luca Pacioli</p>
          <a href="#" className="btn btn-primary">Follow</a>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src="/van.jpg"
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Pintor</h5>
          <p className="card-text">Vincent Van Gogh</p>
          <a href="#" className="btn btn-primary">Follow</a>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src="/salvador.jpg"
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Pintor</h5>
          <p className="card-text"></p>
          Salvador Dalí <br/>
          <em>Obras notables:</em><br />
          La Persistencia de la Memoria <br />
          Los Elefantes <br />
          El Sacramento de la Última Cena <br />
          Cristo de San Juan de la Cruz <br />
          Galatea de las Esferas <br />
          Cisnes Reflejando Elefantes

          <a href="#" className="btn btn-primary">Follow</a>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src="/vinci.jpg"
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Pintor</h5>
          <p className="card-text">
            Leonardo Da Vinci<br />
            <em>Obras notables:</em><br />
            Adoración de los Magos<br />
            La Virgen de las Rocas<br />
            La Gioconda<br />
            La Última Cena<br />
            La dama del armiño
          </p>
          <a href="#" className="btn btn-primary">Follow</a>
        </div>
      </div>
    </div>
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="/Pacioli.jpg"
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Pintor</h5>
          <p className="card-text">Fray Luca Pacioli</p>
          <a href="#" className="btn btn-primary">Follow</a>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src="/van.jpg"
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Pintor</h5>
          <p className="card-text">Vincent Van Gogh</p>
          <a href="#" className="btn btn-primary">Follow</a>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src="/salvador.jpg"
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Pintor</h5>
          <p className="card-text"></p>
          Salvador Dalí <br/>
          <em>Obras notables:</em><br />
          La Persistencia de la Memoria <br />
          Los Elefantes <br />
          El Sacramento de la Última Cena <br />
          Cristo de San Juan de la Cruz <br />
          Galatea de las Esferas <br />
          Cisnes Reflejando Elefantes

          <a href="#" className="btn btn-primary">Follow</a>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src="/vinci.jpg"
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Pintor</h5>
          <p className="card-text">
            Leonardo Da Vinci<br />
            <em>Obras notables:</em><br />
            Adoración de los Magos<br />
            La Virgen de las Rocas<br />
            La Gioconda<br />
            La Última Cena<br />
            La dama del armiño
          </p>
          <a href="#" className="btn btn-primary">Follow</a>
        </div>
      </div>
    </div>
</div>

    )
}