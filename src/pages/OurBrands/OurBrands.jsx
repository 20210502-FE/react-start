import './OurBrands.scss';
import outBrandImage from './../../assets/images/ourBrands.png'
import {Link} from 'react-router-dom';

const OurBrands = () => {
    return (
       <section className="Our-brands">
           <div className="Our-brands__heading">
               <h3 className="Our-brands__title">Our brands</h3>
                <Link className="Our-brands__link" to='/'>SEE MORE</Link>
           </div>
            <div className="Our-brands__image">
                <img src={outBrandImage} alt=""/>
            </div>
       </section>
    )

};

export default OurBrands;
