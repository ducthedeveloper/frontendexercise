import React, {useState} from 'react';

function MyArticles(){
    const [articles, setArticles] = useState(['Ahoj', 'Cau' , 'Cus']);
    const [headerRow, setHeaderRow] = useState(['Article title','Perex','# of comments']);
    const [bodyRow, setBodyRow] = useState([['Alfreds Futterkiste','Maria Anders','Germany'],['Centro comercial Moctezuma','Francisco Chang','Mexico'],['Ernst Handel','Roland Mendel','Austria'],['Island Trading','Helen Bennett','UK']]);
    const y = headerRow.map((x,i) => (
    <th>{x}</th>
    ))

        const z = bodyRow.map ((p,i) => (
            <td>{p}<td><button className='dltBtn' onClick={deletes}>x</button></td></td>
            
        ))
    function deletes (index){
        const article =  [...bodyRow]
        article.splice(index, 1)
        console.log(article)
        return article
        }
    
    return(
        <div>
            <h3>My Articles</h3>
            <button>Create new article</button>
  <table>
        {y}
        {z}
    
 

</table>
        </div>
    )
    }


export default MyArticles;