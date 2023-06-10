import React from "react";


class Controllers extends React.Component{
    handleButtonClick = (e) => {
        this.props[e.target.name] ()
    }
    render (){
        return (
            <div>
                <button onClick={this.handleButtonClick} name = "increment">INCREMENT</button>
                <button onClick={this.handleButtonClick} name = "decrement">DECREMENT</button>
            </div>
        )
    }
}

export default Controllers