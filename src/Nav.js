import React, {useState} from 'react';
import {Link} from 'react-router-dom'


function Nav() {
  const [item, setItems] = useState(['Read Articles', 'About'])

let listItems = []
  
item.forEach(i => {
 
    listItems.push(<div key={i} class='ahoj'> <a href='#'>{i}</a></div>)
  }
);
return (
    <div className="App">
    <nav>
      <ul>
        <li className='ahoj cau'> <Link to='/'>
        <span>Home</span>
        </Link>
        </li>
        <Link to='/'>
        {listItems[0]}
        </Link>
        <Link to='/about'>
        {listItems[1]}
        </Link>
      </ul>
      <Link to='/login'>
      <span id='login'>log in</span>
      </Link>
    
    </nav>
    </div>
  );
}

export default Nav;