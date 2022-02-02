import React from 'react';
import './Home.scss'
import { Link } from 'react-router-dom';

const Home = () => {
    return <div className="HomePage">
        <div className="Container">
            <div className="Content">
                <div className="Heading">
                    <span className="h4">Welcome To Meme Creator</span>
                    <div className="Description">
                        <p>
                            Now Create Meme Of Your Choice. We've Curated A List Of Meme For You. Choose Any Of Them Add Your Funny Caption And Shhh! You Become A Memer
                        </p>
                    </div>
                    <img src="/SampleImage.jpg" alt="Sample Meme" />
                </div>
            
                <div className="Button">
                    <Link className="Link" to="/Gallery">Get Started</Link>
                </div>
            </div>
        </div>
  </div>;
};

export default Home;
