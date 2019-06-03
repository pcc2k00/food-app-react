import React, { Component } from 'react'
import Cardrecip from './Cardrecip'
import {Link} from 'react-router-dom'

export class Recip extends Component {
    constructor(props){
        super(props)
        this.state={
            name: this.props.match.params.catID,
            recip:[],
            error: null
        }
    }
    componentDidMount(){
        this.fetchRecipies();
    }

    fetchRecipies(){
        fetch(`http://temp.dash.zeta.in/food.php`)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            const {categories,recipes}=data;
            recipes.map((value,index)=>{
                if(value.category===this.state.name){
                    this.setState({
                        recip:[...this.state.recip,value]
                    })
                }
                })
            })       
        .catch((error)=>{
            this.setState({
                error: error.errorMessage, 
            })
        })
    }
    render() {
        const {name,recip,error}=this.state;
        if(error){
            return (
                <div className="error">{this.state.error}</div>
            )
        }
        return (
            <div>
                <div class="container">
                    <div class="row">
                        {
                            recip.map((value,index)=>{
                                const style={
                                    width: '500px',
                                    paddingRight:'50px',
                                    margin: '30px'
    
                                }
                                const imgstyle={
                                    width: '250px',
                                    height: '250px',
                                    textAlign: 'center'

                                }
                                const divblock={
                                    display:'inline-block'
                                }

                                
                                return(
                                    <div class="col-12 mt-3">
                                    <div class="card">
                                        <div class="card-horizontal" style={{display:'flex'}}>
                                            <div class="img-square-wrapper">
                                                <img class="" src={value.image} alt="Card image cap" style={imgstyle}/>
                                            </div>
                                            <div class="card-body">
                                                <button style={{float:'right'}}className="btn btn-md btn-warning">Add to Cart</button>
                                                <h4 class="card-title">{value.name}</h4>
                                                
                                                <p class="card-text">{value.details}</p>
                                                <h6>Price<h4> {value.price}$</h4></h6>
                                                <h6 style={{float:'right'}}><a href="#">Reviews({value.reviews})</a></h6>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <small class="text-muted">Last updated 3 mins ago</small>
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
}

export default Recip
