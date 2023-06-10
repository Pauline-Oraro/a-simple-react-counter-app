import React from "react";
import Controllers from '../components/controllers'


class Counter extends React.Component{
    render (){
        return (
            <div>
                <h2 className="headingTwo">{this.props.count}</h2>
                <div className="counters">
                <Controllers
                increment = {this.props.increment}
                decrement = {this.props.decrement}/>
                </div>
            </div>
        )
    }
}

export default Counter