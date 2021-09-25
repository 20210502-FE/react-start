import './AboutUs.scss';
import aboutUsImg from './../../assets/images/aboutUs.png'

const AboutUs = () => {
    return (
       <div className="Wrapper">
           <section className="About-us">
                <div>
                    <h3 className="About-us__title">Who are we?</h3>
                    <p className="About-us__text">Apologies if you were looking for an ordinary optical store. We've hand-picked the unique brands from all over the world to give you the special look for your everyday life.</p>
                    <p className="About-us__text">Our glasses will have you looking great and feeling better. We work with independent brands who use the highest-grade of materials, demonstrating detail and craftsmanship in every single pair. A wide range of styles reflect the diversity of our clients and are made to suit different face shapes.</p>
                </div>
               <div className="About-us__image">
                   <img src={aboutUsImg} alt=""/>
               </div>
           </section>
       </div>
    )

};

export default AboutUs;
