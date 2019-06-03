import React, { Component } from 'react'
import Cardcat from './Cardcat'
import Recip from '../recipies/Recip'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

export class Categories extends Component {
    constructor(){
        super();
        this.state={
            categories: [],
            recipies: [],
            error: null
        }
    }
    componentDidMount(){
        this.fetchCategories();
    }

    fetchCategories(){
        fetch(`http://temp.dash.zeta.in/food.php`)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            console.log(data);
            const {categories,recipes}=data;
            this.setState({
                categories,
                recipes
            })
        })
        .catch((error)=>{
            this.setState({
                error: error.errorMessage, 
            })
        })
    }
    render() {
        const {categories,recipies,error}=this.state;
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
                            categories.map((value,index)=>{
                                const style={
                                    width: '18rem',
                                    marginTop: '30px',
                                    marginDown: '30px',
                                    paddingDown: '200px',
                                    textAlign: 'center'
    
                                }
                                const imgstyle={
                                    width: '200px',
                                    height: '200px',
                                    marginLeft: '45px',
                                    marginTop:'10px'
                                }
                                return(
                                    <div className="col-lg-4" >
                                    <div className="card" style={style}>
                                        <img class="card-img-top" src={value.image} alt="Card image cap" style={imgstyle}/>
                                        <div className="card-body">
                                            <h5 className="card-title">{value.name}</h5>
                                            <Link to={`/${value.name}`}><button class="btn btn-primary">More Info</button></Link>
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


export default Categories

