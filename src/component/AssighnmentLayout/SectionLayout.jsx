import React, { Component } from 'react'

export default class SectionLayout extends Component {
  render() {
    return (
        <section>
            <div className="container px-lg-5" style={{maxWidth:1338 , marginBottom:30}}>
                {/* Page Features*/}
                <div className="row gx-lg-5">
                    <div className="col-4 ">
                        <div className="card bg-light border-0 h-100">
                            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"  style={{width:64,height:64,margin:'auto',borderRadius:'7px'}}><i  style={{fontSize:31,margin:16}} className="fa fa-layer-group"></i></div>
                                <h4 style={{fontWeight:'bold'}} className="fs-4 fw-bold">Fresh new layout</h4>
                                <p className="mb-0">With Bootstrap 5, we've created a fresh new layout for this template!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card bg-light border-0 h-100" >
                            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4 " style={{width:64,height:64,margin:'auto',borderRadius:'7px'}}><i style={{fontSize:31,margin:16}} className="fa fa-cloud-download-alt"></i></div>
                                <h4  style={{fontWeight:'bold'}}  className="fs-4 fw-bold">Free to download</h4>
                                <p className="mb-0">As always, Start Bootstrap has a powerful collectin of free templates.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card bg-light border-0 h-100">
                            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4" style={{width:64,height:64,margin:'auto',borderRadius:'7px'}}><i style={{fontSize:31,margin:16}} className="fa fa-address-card"></i></div>
                                <h4  style={{fontWeight:'bold'}}  className="fs-4 fw-bold">Jumbotron hero header</h4>
                                <p className="mb-0">The heroic part of this template is the jumbotron hero header!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card bg-light border-0 h-100">
                            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4" style={{width:64,height:64,margin:'auto',borderRadius:'7px'}}><i style={{fontSize:31,margin:16}} className="fab fa-bootstrap"></i></div>
                                <h4 style={{fontWeight:'bold'}}  className="fs-4 fw-bold">Feature boxes</h4>
                                <p className="mb-0">We've created some custom feature boxes using Bootstrap icons!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card bg-light border-0 h-100">
                            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4" style={{width:64,height:64,margin:'auto',borderRadius:'7px'}}><i style={{fontSize:31,margin:16}} className="fa fa-code"></i></div>
                                <h4  style={{fontWeight:'bold'}}  className="fs-4 fw-bold">Simple clean code</h4>
                                <p className="mb-0">We keep our dependencies up to date and squash bugs as they come!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card bg-light border-0 h-100">
                            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4" style={{width:64,height:64,margin:'auto',borderRadius:'7px'}}><i style={{fontSize:31,margin:16}} className="fa fa-check"></i></div>
                                <h4  style={{fontWeight:'bold'}}  className="fs-4 fw-bold">A name you trust</h4>
                                <p className="mb-0">Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
  }
}
