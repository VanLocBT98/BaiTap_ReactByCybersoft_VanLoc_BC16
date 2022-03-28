import React, { Component } from 'react';
import '../../assets/Glasses.css';
import dataGlasses from '../../data/dataGlasses.json'

export default class TryGlasses extends Component {
  state={
    GlassesCurrent :{
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
  }
  renderGlasses =() =>{
    return dataGlasses.map((glasses,index)=>{
      return (
          <img onClick ={()=>{this.TryGlasses(glasses)}} className="ml-2 p-2 border border-width-2" style={{cursor: 'pointer'}} key={index} src={glasses.url} alt={glasses.name} width={110}/>
      )
    })
  }
  TryGlasses = (newGlasses) =>{
    this.setState({
      GlassesCurrent: newGlasses
    })
  }
  render() {
    const StyleP ={
      fontSize: '14px',
      color:'yellow'
    }
    const styleB ={
      fontSize: '15px',
      color:'black'
    }
    const keyFrames = `@keyframes animationTryGlasses${Date.now()}{
      from{ 
        width:0;
        transform:rotate(45deg);
        opacity:0.2;
      } 
      to{ 
        width:150px
        transform:rotate(0deg)
        opacity:1
      }
    }`;
    const styleTryglasses = {
      transform:'rotate(0deg)',
      animation:`animationTryGlasses${Date.now()} 1s`
    }
    return (
      <div className="bgGlasses">
        <style>
          {keyFrames}
        </style>
        <div className="mantle">
            <h3 className="text-light text-center p-5"> Try Glasses App Online</h3>
            <div className="container">
              <div className="row mt-5 text-center">
                <div className="col-6">
                  <div className="position-relative">
                    <img className="position-absolute" src ="./img/glassesImage/model.jpg" alt="model.jpg" width={250}/>
                    <img className="position-absolute glasses" style={styleTryglasses} src ={this.state.GlassesCurrent.url} alt="v1.png"  />
                    <div className="position-relative infoGlasses">
                      <p><b>Name Glasses : </b> {this.state.GlassesCurrent.name} </p>
                      <p style={StyleP}><b style={styleB}>Description Glasses : </b> {this.state.GlassesCurrent.desc} </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                    <img src ="./img/glassesImage/model.jpg" alt="model.jpg" width={250}/>
                </div>
              </div>
            </div>
            <div className="container text-center bg-light d-flex mt-5 justify-content-center p-5">
                {this.renderGlasses()}
            </div>
        </div>
      </div>
    )
  }
}
