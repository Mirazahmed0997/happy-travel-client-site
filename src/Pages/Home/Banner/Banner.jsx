import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import tb1 from '../../../assets/tb1.jpg'
import tb2 from '../../../assets/tb2.jpg'
import tb3 from '../../../assets/tb3.jpg'

const Banner = () => {
    return (
            <Carousel>
                <div>
                    <img src={tb3} />
                </div>
                <div>
                    <img src={tb2} />
                </div>
                <div>
                    <img src={tb1} />
                </div>
            </Carousel>

    );
};

export default Banner;