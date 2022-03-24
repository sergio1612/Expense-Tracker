import React, { useEffect } from 'react';
import '../styles/landing.css'
import  Header  from './Header';
import AOS from "aos";
import "aos/dist/aos.css";
export const Landing = ()=>{
    useEffect(()=>{
        AOS.init();
    },[]);
    return (
        <div className = "landing ">
           <Header/>
            <main >
                <div className = "container landing-heading">  
                    <div className='row'>
                        <div  className='col-md-6'>
                        <img data-aos='zoom-in-up' className = "landing-big" src={require('../images/dsiplay.png')} alt=""/>   
                        </div>
                        <div className='col-md-6'>
                            <div className='landing-header'>
                                <h1>Stay Relaxed!</h1>
                                <h2>When Sharing</h2>
                                <h2>Expenses with anyone.</h2>
                            </div>
                            <p className = "landing-desc"><strong>Share</strong> bills and IOUs. <strong>Make sure</strong> everyone gets paid back. <strong>Totally free</strong> for web</p>
                        </div>
                    </div>
                </div>
                
                {/*----------Landing Features--------------- */}
                <div className='background-secondary'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className = "landing-content">
                                    <h1>Splitting expenses has </h1><h1>never been easier</h1> 
                                        <ul>
                                            <li><i className="fas fa-check-circle"></i> &nbsp;&nbsp;Share bills and IOUs</li>
                                            <li><i className="fas fa-check-circle"></i> &nbsp;&nbsp;Make sure everyone gets paid back</li>
                                            <li><i className="fas fa-check-circle"></i> &nbsp;&nbsp;Totally Free for Web.</li>
                                        </ul>
                                    <a href="http://localhost:3000/signup"><button className = "landing-button">Let's Get Started</button></a>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className = "landing-feature">
                                    <div>   
                                        <img data-aos='flip-right' className = "landing-img" src={require('../images/desktop.png')} alt=""/>   
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}