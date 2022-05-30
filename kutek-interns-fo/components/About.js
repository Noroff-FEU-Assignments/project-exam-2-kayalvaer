import { Col, Row, Container } from 'react-bootstrap';

export default function About() {
  return (
    //about content strat 
        <div class="about-car content-area-5">
            <div class="container">
                <div class="row">
                    <div class="col-xl-5 col-lg-6">
                        <div class="about-car-photo">
                            <div id="carDetailsSlider" class="carousel car-details-sliders slide">
                                // main slider carousel items
                                <div class="carousel-inner">
                                    <div class="active item carousel-item" data-slide-number="0">
                                        <Image src="/" class="img-fluid" alt="developer-1">
                                    </div>
                                    <div class="item carousel-item" data-slide-number="1">
                                        <Image src="/" class="img-fluid" alt="developer-2">
                                    </div>
                                    <div class="item carousel-item" data-slide-number="2">
                                        <Image src="/" class="img-fluid" alt="developer-2">
                                    </div>
                                </div>
                                // main slider carousel nav controls 
                                <ul class="carousel-indicators car-properties list-inline nav nav-justified">
                                    <li class="list-inline-item active">
                                        <a id="carousel-selector-0" class="selected" data-slide-to="0" data-target="#developerDetailsSlider">
                                            <Image src="/" class="img-fluid" alt="small-developer-1">
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a id="carousel-selector-1" data-slide-to="1" data-target="#developerDetailsSlider">
                                            <Image src="/" class="img-fluid" alt="small-developer-2">
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a id="carousel-selector-2" data-slide-to="2" data-target="#developerDetailsSlider">
                                            <Image src="/" class="img-fluid" alt="small-developer-3">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-6 align-self-center">
                        <div class="best-used-car">
                            <h3>Welcome to <span>Car Zone</span></h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>
                            <p class="mb-0">electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    // about content end
  )
}
