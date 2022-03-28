import React, { Component } from 'react'

export default class BodyLayout extends Component {
  render() {
    return (
        <header className="py-5">
            <div className="container px-lg-5" style={{maxWidth:1338}}>
                <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
                    <div className="m-4 m-lg-5">
                        <h1 className="display-5 fw-bold" style={{fontWeight: '700',fontSize:48}}>A warm welcome!</h1>
                        <p className="fs-4" style={{fontSize:24}}>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                        <a className="btn btn-primary btn-lg" href="#!">Call to action</a>
                    </div>
                </div>
            </div>
        </header>

    )
  }
}
