import React from 'react';
import {Link} from 'react-router-dom'
import img from './img.jpg'

function Home(){
   
    return(
        <div className='Home'>
            <div className='read'>
            <h1 >Recent Articles</h1>
            </div>
            <Link to='/articles'>
            <div className='article'>
                <div className='container'>
                    <img src={img} alt='dog'></img>
                </div>
                <div className='articelInf'>
                    <ul>
                        <h2>Dog Shat Himself</h2>
                        <span> Duc Nguyen </span>
                        <p> lorem ipsumDuis risus. 
 
                        </p>
                        <span></span>
                    </ul>
                </div>

            </div>
            </Link>
            <Link to='/articles'>
            <div className='article'>
                <div className='container'>
                    <img src={img}/>
                </div>
                <div>
                    <ul className='articleul'>
                        <h2>Dog Shat Himself</h2>
                        <span> Duc Nguyen </span>
                        <p> lorem ipsum 
                        </p>
                        <span></span>
                    </ul>
                </div>

            </div>
            </Link>
        </div>
    )
}



export default Home;