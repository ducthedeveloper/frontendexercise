import React, {useState, useEffect} from 'react';
import img from './profile.jpg';
import imgs from './img.jpg'


function Articles(){
    const [comment, setComment] = useState(['Wow', 'Amazing'])
    const [text, setText] = useState('')
    const [number, setNumber] = useState(0)
    // comment.forEach(
    // i => {x.unshift(<li>{i} <button onClick={increase} className='admin'>+</button>
    //     |<button onClick={decrease} className='admin'>-</button> | {number}</li>)   
    //   });
    const x = comment.map((i, index) => (
        <li key={index} className='nostyle'> <img src={img} alt='profile' className='profile'></img> {i} 
            <button onClick={increase} className='admin'>+</button>
            |<button onClick={decrease} className='admin'>-</button> | {number}
        </li>
    ))

      function getText(e){
          setText(e.target.value)
      }
          function add(e){
            if(text === '' && e.key === 'Enter'){
                alert('No comment')
            }else if(e.key === 'Enter'){
                      setComment([...comment, text])
                      setText('')
              }
          }
        
      
       function increase () {
        setNumber(number + 1)
      }

      function decrease(){ 
        setNumber(number - 1)
      }
    return(
        <div className='Article'>
            <div className='mainArt'>
            <h1>Dog Ate Shit</h1>
            <h5>Duc Nguyen  04/04/2020</h5>
            <div className='containerMain'><img src={imgs} alt='cat'></img></div>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas libero. Integer tempor. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Nulla quis diam. 
                
                Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Integer lacinia. Integer <br/> imperdiet lectus quis justo. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Praesent vitae arcu tempor neque lacinia pretium. Aenean placerat. <br/> Maecenas aliquet accumsan leo. Pellentesque ipsum. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nam sed tellus id magna elementum tincidunt. Curabitur sagittis hendrerit ante. Nulla pulvinar eleifend sem.

Duis risus. Phasellus rhoncus. Aliquam erat volutpat. Curabitur 

bibendum justo non orci. In dapibus augue non sapien. <br/> <br/>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Integer tempor. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Nullam rhoncus aliquam metus. Aliquam ante. Nullam at arcu a est sollicitudin euismod. Proin in tellus sit amet nibh dignissim sagittis. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Aliquam erat volutpat. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Fusce tellus. Nunc auctor. Et harum quidem rerum facilis est et expedita distinctio.

Etiam neque. Integer tempor. Etiam egestas wisi a erat.<br/><br/>  Nulla non

 lectus sed nisl molestie malesuada. Praesent id justo in neque elementum ultrices. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. In convallis. Duis condimentum augue id magna semper rutrum. Nam sed tellus id magna elementum tincidunt. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc auctor. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Nulla pulvinar eleifend sem. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Morbi scelerisque luctus velit. Pellentesque sapien. In rutrum.</p>
            
        <ul >
            <div className='commentsec'>
           <h1>Comments ({comment.length}) </h1>
        <input type='text' onKeyPress={add} onChange={getText} value={text} className='commentInp' placeholder='Join the discussion'></input>
        {x}
        
        </div>
        </ul>
            </div>
       

        <div className='sidebar'>
            
            <ul>
           <li> <h3>Related Articles</h3></li>
                <li><h4>Dog vs Cats who wins?</h4>
                <p>In this article there is no winner just losers. <br/>
             Thas is life and you have to deal with it.<br/> More text about this exciting topic coming soon</p></li>
            </ul>
        </div>
            
        </div>
    )
    }

export default Articles;