import './Home.scss';
import {Link} from 'react-router-dom'
import bannerImage from './../../assets/images/banner.png'

const Home = () => {
    return (
        <div className="Home">
            <section className="Home__banner">
                <h1 className="Home__title">We treat your eyes with care</h1>
                <Link className="Home__banner-link" to="/">SEE THE COLLECTION -----></Link>
                <div className="Home__banner-img" >
                    <img src={bannerImage} />
                </div>
            </section>
        </div>
    )

};

export default Home;
