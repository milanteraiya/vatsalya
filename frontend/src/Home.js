import React from 'react'
import './Home.css';
import { NavLink } from 'react-router-dom';

function Home() {
    return ( 
        <>
        
        <main className="main">
        
        <section className="card-area">
            <section className="card-section">
                <div className="card">
                    <div className="flip-card">
                        <div className="flip-card__container">
                            <div className="card-front">
                                <div className="card-front__tp card-front__tp--city">

                               <h2 className="card-front__heading">
                                Pujya Dada Bhagwan
                            </h2>
                                </div>

                                <div className="card-front__bt">
                                    <p className="card-front__text-view card-front__text-view--city">
                                        View Me
                                    </p>
                                </div>
                            </div>
                        <img src='dada.jpg' width={150} height={150} />
                            
                        </div>
                    </div>

                    <div className="inside-page">
                        <div className="inside-page__container">
                            <h3 className="inside-page__heading inside-page__heading--city">
                                Pujya Dada Bhagwan
                            </h3>
                           <NavLink to={'/dada'} className="inside-page__btn inside-page__btn--city">READ MORE</NavLink>
                        </div>
                       </div>
                </div>
            </section>

            <section className="card-section">
                <div className="card">
                    <div className="flip-card">
                        <div className="flip-card__container">
                            <div className="card-front">
                                <div className="card-front__tp card-front__tp--ski">
                                    
                                               <h2 className="card-front__heading">
                                                Pujya Dr. NiruMaa
                                               </h2>
                                              
                                </div>

                                <div className="card-front__bt">
                                    <p className="card-front__text-view card-front__text-view--ski">
                                        View Me
                                    </p>
                                </div>
                            </div> 
                             <img src='nitumaa.jpg' width={150} height={150} />
                        </div>
                    </div>

                    <div className="inside-page">
                        <div className="inside-page__container">
                            <h3 className="inside-page__heading inside-page__heading--ski">
                                Pujya Dr. NiruMaa
                            </h3>
                            <NavLink to={'/niruma'} className="inside-page__btn inside-page__btn--ski">READ MORE</NavLink>
                        </div>
                    </div>
                </div>
            </section>

            <section className="card-section">
                <div className="card">
                    <div className="flip-card">
                        <div className="flip-card__container">
                            <div className="card-front">
                                <div className="card-front__tp card-front__tp--beach">
                                    
                               
                                               <h2 className="card-front__heading">
                                                   PujyaShree Deepakbhai
                                               </h2>
                                               
                                </div>

                                <div className="card-front__bt">
                                    <p className="card-front__text-view card-front__text-view--beach">
                                        View Me
                                    </p>
                                </div>
                            </div>
                            <img src='deepakbhai.jpg' width={150} height={150} />
                        </div>
                    </div>

                    <div className="inside-page">
                        <div className="inside-page__container">
                            <h3 className="inside-page__heading inside-page__heading--beach">
                                PujyaShree Deepakbhai
                            </h3>
                            <NavLink to={'/dipakbhai'} className="inside-page__btn inside-page__btn--beach">READ MORE</NavLink>
                        </div>
                    </div>
                </div>
            </section>

            
            
        </section>
        
    </main>
    
        </>
     );
}

export default Home;
