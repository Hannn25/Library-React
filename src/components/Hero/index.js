import  {Carousel}  from "react-bootstrap";
import dilan1 from '../../assets/dilan1.jpg'
import ubur1 from '../../assets/ubur1.png'
import '../../styles/Hero.css'

        const Hero = ()=>{
            return (
                <Carousel>
              <Carousel.Item>
                <img
                  className="d-flex flex-column w-100"
                  src={dilan1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Dilan Jatimulya 2022</h3>
                  <p>Apaan tuh? Eh brader....</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex flex-column w-100"
                  src={ubur1}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Ubur-Ubur Lembur</h3>
                  <p>Lembur terus gajadi hokage</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex flex-column w-100"
                  src={dilan1}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            )
        }
export default Hero;