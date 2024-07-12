import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
      <div className="banner"></div>
      <div className="menu">
        <div className="menuitem"><a href="index.html">Home</a></div>
        <div className="menuitem"><a href="products.html">Products</a></div>
        <div className="menuitem"><a href="People.html">People</a></div>
        <div className="menuitem"><a href="contactus.html">Contact Us</a></div>
        </div>
      <div className="content">
        <div className="homecontent">
          <h1>Our company employees:</h1><br /><br />
          <div className="productitems">
            <div className="productitem"> 
                <div className="itemimage">
                <img src="1.jpg" alt="product image" />
                </div>
                <div className="itemname">Bobby Kotick</div>
                <div className="itemprice">CEO</div>
            </div>
            <div className="productitem"> 
                <div className="itemimage">
                <img src="2.jpeg"  alt="product image" />
                </div>
                <div className="itemname">Beluga</div>
                <div className="itemprice">Office manager</div>
            </div>
            <div className="productitem"> 
              <div className="itemimage">
              <img src="3.jpg"  alt="product image" />
              </div>
              <div className="itemname">Khaby Lame</div>
              <div className="itemprice">Assistant HR</div>
            </div>
            <div className="productitem"> 
              <div className="itemimage">
              <img src="4.png"  alt="product image" />
              </div>
              <div className="itemname">Melvin Lawson</div>
              <div className="itemprice">Marketing Manager</div>
          </div>
          <div className="productitem"> 
            <div className="itemimage">
            <img src="5.jfif"  alt="product image" />
            </div>
            <div className="itemname">Risitas</div>
            <div className="itemprice">Professional Staff</div>
        </div>  <div className="productitem"> 
          <div className="itemimage">
          <img src="6.jfif"  alt="product image" />
          </div>
          <div className="itemname">Xavier</div>
          <div className="itemprice">Operation Manager</div>
      </div>
          </div>
        </div>
        </div>
        <div className="footer">
          Copyright &#169; 2024 Activision Blizzard Entertainment, Developed by Senthil Kumar.        
      </div>
    </div>
    </>
  )
}

export default App
