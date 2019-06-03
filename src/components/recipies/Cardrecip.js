import React from 'react'
import {BrowserRouter as Router,Route, Link} from 'react-router-dom'

export default function Cardrecip(props) {
    return (
        <div>
            <div class="container-fluid">
                <div class="row">
                        {
                            props.recip.map((value,index)=>{
                                return(
                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div class="card-horizantal">
                                                <div className="img-square-wrapper">
                                                    <img src={value.image} alt="Card image cap"/>
                                                </div>
                                                <div className="card-body">
                                                    <h4 className="card-title">{value.name}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                </div>
            </div>    
        </div>
    )
}
