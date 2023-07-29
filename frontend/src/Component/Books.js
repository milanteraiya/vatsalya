import React, { useDebugValue, useState } from 'react'
import './Books.css';

function Books() {
  
// add to cart
const [cart,setcart] = useState(0)
  const ca=()=>{
    setcart(cart+1);
  }

// Book 1
const [count,setcount] = useState(1)
  const on1=()=>{
    setcount(count+1);
  }
  const on2=()=>{
    setcount(count-1);
  }

  const [pr1,setpr1] = useState(29)
  const b1=()=>{
    setpr1(pr1+29);
  }
  const b2=()=>{
    setpr1(pr1-29);
  }

// Book 2
const [count2,setcount2] = useState(1)
const on3=()=>{
  setcount2(count2+1);
}
const on4=()=>{
  setcount2(count2-1);
}

const [pr2,setpr2] = useState(29)
const b3=()=>{
  setpr2(pr2+29);
}
const b4=()=>{
  setpr2(pr2-29);
}

// Book 3
const [count3,setcount3] = useState(1)
const on5=()=>{
  setcount3(count3+1);
}
const on6=()=>{
  setcount3(count3-1);
}

const [pr3,setpr3] = useState(29)
const b5=()=>{
  setpr3(pr3+29);
}
const b6=()=>{
  setpr3(pr3-29);
}

// Book 4
const [count4,setcount4] = useState(1)
const on7=()=>{
  setcount4(count4+1);
}
const on8=()=>{
  setcount4(count4-1);
}

const [pr4,setpr4] = useState(29)
const b7=()=>{
  setpr4(pr4+29);
}
const b8=()=>{
  setpr4(pr4-29);
}

// Book 5
const [count5,setcount5] = useState(1)
const on9=()=>{
  setcount5(count5+1);
}
const on10=()=>{
  setcount5(count5-1);
}

const [pr5,setpr5] = useState(29)
const b9=()=>{
  setpr5(pr5+29);
}
const b10=()=>{
  setpr5(pr5-29);
}

// Book 6
const [count6,setcount6] = useState(1)
const on11=()=>{
  setcount6(count6+1);
}
const on12=()=>{
  setcount6(count6-1);
}

const [pr6,setpr6] = useState(29)
const b11=()=>{
  setpr6(pr6+29);
}
const b12=()=>{
  setpr6(pr6-29);
}

// Book 7
const [count7,setcount7] = useState(1)
const on13=()=>{
  setcount7(count7+1);
}
const on14=()=>{
  setcount7(count7-1);
}

const [pr7,setpr7] = useState(29)
const b13=()=>{
  setpr7(pr7+29);
}
const b14=()=>{
  setpr7(pr7-29);
}

// Book 8
const [count8,setcount8] = useState(1)
const on15=()=>{
  setcount8(count8+1);
}
const on16=()=>{
  setcount8(count8-1);
}

const [pr8,setpr8] = useState(29)
const b15=()=>{
  setpr8(pr8+29);
}
const b16=()=>{
  setpr8(pr8-29);
}

// Book 9
const [count9,setcount9] = useState(1)
const on17=()=>{
  setcount9(count9+1);
}
const on18=()=>{
  setcount9(count9-1);
}

const [pr9,setpr9] = useState(29)
const b17=()=>{
  setpr9(pr9+29);
}
const b18=()=>{
  setpr9(pr9-29);
}

// Book 10
const [count10,setcount10] = useState(1)
const on19=()=>{
  setcount10(count10+1);
}
const on20=()=>{
  setcount10(count10-1);
}

const [pr10,setpr10] = useState(29)
const b19=()=>{
  setpr10(pr10+29);
}
const b20=()=>{
  setpr10(pr10-29);
}

// Book 11
const [count11,setcount11] = useState(1)
const on21=()=>{
  setcount11(count11+1);
}
const on22=()=>{
  setcount11(count11-1);
}

const [pr11,setpr11] = useState(29)
const b21=()=>{
  setpr11(pr11+29);
}
const b22=()=>{
  setpr11(pr11-29);
}

// Book 12
const [count12,setcount12] = useState(1)
const on23=()=>{
  setcount12(count12+1);
}
const on24=()=>{
  setcount12(count12-1);
}

const [pr12,setpr12] = useState(29)
const b23=()=>{
  setpr12(pr12+29);
}
const b24=()=>{
  setpr12(pr12-29);
}

    return ( 
        <>
        
    <header>
  <div className="cart">

    <a href="">

     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRggxiX-ovP7VkIznqikVRAoEgt_c6qUSGuxLnJrIFxSPHnUEJKqhO4afWIYu5ZMFqphVk&usqp=CAU' height={40}  />

      <span className="cart-count">{cart}</span>

    </a>

  </div>

  <div className="hamburger">

    <i className="fas fa-bars"></i>

  </div>
</header>
         <main>

<section className="product-list">

  <h2>Buy Books</h2>

  <ul>
{/* Book 1 */}
    <li>
      <img src="https://download.dadabhagwan.org/Books/English/Images/simandhar-swami-english.jpg" alt="Product 1" />
      <h3>Shree Simadhar Swami </h3>
      <p>Price Rs. : {pr1} </p>
      <button className='bt' onClick={() =>{
        on1()
        b1()
      }}>+</button>
      <label>Qty : {count} </label>
      <button className='bt'  onClick={() =>{
        on2()
        b2()
      }}>-</button>
      <button onClick={ca}>Add to Cart</button>
    </li>

{/* Book 2 */}
    <li>
      <img src="https://download.dadabhagwan.org/Books/English/Images/Money.jpg" alt="Product 1" />
      <h3>The Science Of Money</h3>
      <p>Price Rs. : {pr2} </p>
      <button className='bt' onClick={() =>{
        on3()
        b3()
      }}>+</button>
      <label>Qty : {count2} </label>
      <button className='bt'  onClick={() =>{
        on4()
        b4()
      }}>-</button>
      <button onClick={ca}>Add to Cart</button>
    </li>

    {/* Book 3 */}
    <li>
      <img src="https://download.dadabhagwan.org/Books/English/Images/pure-love.jpg" alt="Product 1" />
      <h3>Pure Love</h3>
      <p>Price Rs. : {pr3} </p>
      <button className='bt' onClick={() =>{
        on5()
        b5()
      }}>+</button>
      <label>Qty : {count3} </label>
      <button className='bt'  onClick={() =>{
        on6()
        b6()
      }}>-</button>
      <button onClick={ca}>Add to Cart</button>
    </li>

{/* Book 4 */}
    <li>
      <img src="https://download.dadabhagwan.org/Books/English/Images/gnani-purush.jpg" alt="Product 1" />
      <h3>Gnani Purush</h3>
      <p>Price Rs. : {pr4} </p>
      <button className='bt' onClick={() =>{
        on7()
        b7()
      }}>+</button>
      <label>Qty : {count4} </label>
      <button className='bt'  onClick={() =>{
        on8()
        b8()
      }}>-</button>
      <button onClick={ca}>Add to Cart</button>
    </li>

    {/* Book 5 */}
    <li>
      <img src="https://download.dadabhagwan.org/Books/English/Images/anger.jpg" alt="Product 1" />
      <h3>Anger</h3>
      <p>Price Rs. : {pr5} </p>
      <button className='bt' onClick={() =>{
        on9()
        b9()
      }}>+</button>
      <label>Qty : {count5} </label>
      <button className='bt'  onClick={() =>{
        on10()
        b10()
      }}>-</button>
      <button onClick={ca}>Add to Cart</button>
    </li>

{/* Book 6 */}
    <li>
      <img src="https://download.dadabhagwan.org/Books/English/Images/adjust-everywhere.jpg" alt="Product 1" />
      <h3>Adjust Everywhere</h3>
      <p>Price Rs. : {pr6} </p>
      <button className='bt' onClick={() =>{
        on11()
        b11()
      }}>+</button>
      <label>Qty : {count6} </label>
      <button className='bt'  onClick={() =>{
        on12()
        b12()
      }}>-</button>
      <button onClick={ca}>Add to Cart</button>
    </li>

    {/* Book 7 */}
    <li>
      <img src="https://download.dadabhagwan.org/Books/English/Images/Self-Realization.jpg" alt="Product 1" />
      <h3>Self Realization</h3>
      <p>Price Rs. : {pr7} </p>
      <button className='bt' onClick={() =>{
        on13()
        b13()
      }}>+</button>
      <label>Qty : {count7} </label>
      <button className='bt'  onClick={() =>{
        on14()
        b14()
      }}>-</button>
      <button onClick={ca}>Add to Cart</button>
    </li>

{/* Book 8 */}
    <li>
      <img src="https://download.dadabhagwan.org/Books/English/Images/Right-Understanding-to-Help-Others.jpg" alt="Product 1" />
      <h3>Right Understanding</h3>
      <p>Price Rs. : {pr8} </p>
      <button className='bt' onClick={() =>{
        on15()
        b15()
      }}>+</button>
      <label>Qty : {count8} </label>
      <button className='bt'  onClick={() =>{
        on16()
        b16()
      }}>-</button>
      <button onClick={ca}>Add to Cart</button>
    </li>

    {/* Book 9 */}
    <li>
      <img src="https://download.dadabhagwan.org/Books/English/Images/the-essanceof-all-religion.jpg" alt="Product 1" />
      <h3>Essence Of All Religion</h3>
      <p>Price Rs. : {pr9} </p>
      <button className='bt' onClick={() =>{
        on17()
        b17()
      }}>+</button>
      <label>Qty : {count9} </label>
      <button className='bt'  onClick={() =>{
        on18()
        b18()
      }}>-</button>
      <button onClick={ca}>Add to Cart</button>
    </li>

    {/* Book 10 */}
    <li>
      <img src="https://download.dadabhagwan.org/Books/English/Images/pratikraman-F.jpg" alt="Product 1" />
      <h3>Pratikraman</h3>
      <p>Price Rs. : {pr10} </p>
      <button className='bt' onClick={() =>{
        on19()
        b19()
      }}>+</button>
      <label>Qty : {count10} </label>
      <button className='bt'  onClick={() =>{
        on20()
        b20()
      }}>-</button>
      <button onClick={ca}>Add to Cart</button>
    </li>

    {/* Book 11 */}
    <li>
      <img src="https://download.dadabhagwan.org/Books/English/Images/worries.jpg" alt="Product 1" />
      <h3>Worries</h3>
      <p>Price Rs. : {pr11} </p>
      <button className='bt' onClick={() =>{
        on21()
        b21()
      }}>+</button>
      <label>Qty : {count11} </label>
      <button className='bt'  onClick={() =>{
        on22()
        b22()
      }}>-</button>
      <button onClick={ca}>Add to Cart</button>
    </li>

    {/* Book 12 */}
    <li>
      <img src="https://download.dadabhagwan.org/Books/English/Images/who-am-i.jpg" alt="Product 1" />
      <h3>Who Am I?</h3>
      <p>Price Rs. : {pr12} </p>
      <button className='bt' onClick={() =>{
        on23()
        b23()
      }}>+</button>
      <label>Qty : {count12} </label>
      <button className='bt'  onClick={() =>{
        on24()
        b24()
      }}>-</button>
      <button onClick={ca}>Add to Cart</button>
    </li>
  </ul>


</section>

</main>
        </>
     );
}

export default Books;
