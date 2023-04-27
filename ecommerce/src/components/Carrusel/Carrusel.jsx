import imgCarrusel from './imgCarrusel1.png'
import imgCarrusel2 from './imgCarrusel2.png'
import imgCarrusel3 from './imgCarrusel3.png'

function Carrusel() {
    return (
        <div>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={imgCarrusel} class=" img d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={imgCarrusel2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={imgCarrusel3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
    );
}

export default Carrusel;