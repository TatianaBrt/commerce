import React from 'react';
import Header from './Header.js'
import Footer from './Footer';
import './App.css';
import Items from './items.js';
import About from './About.js';



class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      orders:[],
      items:[
        {
          id:1,
          title:"Sofa Brown",
          img:"sofa.jpg",
          desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          category:"sofa",
          price:"350"
        },
        {
          id:2,
          title:"Sofa-chair",
          img:"sofa-chair.jpg",
          desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          category:"chair",
          price:"250"
        },
        {
          id:3,
          title:"Сhair",
          img:"chair.jpg",
          desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          category:"chair",
          price:"150"
        },
              ]
    }
    this.addToOrder=this.addToOrder.bind(this)
  }
  render(){
  return (
    <div className="wrapper">
     <div id='home'>
      <Header orders={this.state.orders}/>
      </div>
      < div className='text'>
      <div id="about">
      <About/>
      </div>  
        <div className='CATALOG'>
      <h1 className='textC' id="catalog">CATALOG</h1>
      <Items items={this.state.items} onAdd={this.addToOrder}/>
      </div>
     
      
      <Footer/>
      </div>
    </div>
  );
}

addToOrder(item){
  let isInArray=false
  this.state.orders.forEach(el=>{
    if(el.id===item.id)
    isInArray=true
  })
  if(!isInArray)
this.setState({orders:[...this.state.orders, item]})
}
}

export default App;
