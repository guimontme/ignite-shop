import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"
import { useKeenSlider } from 'keen-slider/react';

import TShirt1 from '../assets/camisetas/Shirt.png'
import TShirt2 from '../assets/camisetas/Shirt-1.png'
import TShirt3 from '../assets/camisetas/Shirt-2.png'
import TShirt4 from '../assets/camisetas/Shirt-3.png'

import 'keen-slider/keen-slider.min.css';

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 52,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
     <Product className="keen-slider__slide">
        <Image src={TShirt1} alt="" width={520} height={480} />
        <footer>
          <strong>Shirt Astronaut</strong>
          <span>$ 25.99</span>
        </footer>
     </Product>
     <Product className="keen-slider__slide">
        <Image src={TShirt2} alt="" width={520} height={480} />
        <footer>
          <strong>Shirt 2</strong>
          <span>$ 25.99</span>
        </footer>
     </Product>
     <Product className="keen-slider__slide">
        <Image src={TShirt3} alt="" width={520} height={480} />
        <footer>
          <strong>Shirt 3</strong>
          <span>$ 25.99</span>
        </footer>
     </Product>
     <Product className="keen-slider__slide">
        <Image src={TShirt4} alt="" width={520} height={480} />
        <footer>
          <strong>Shirt 3</strong>
          <span>$ 25.99</span>
        </footer>
     </Product>
    </HomeContainer>
  )
}
