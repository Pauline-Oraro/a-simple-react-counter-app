import React from 'react'

class Reset extends React.Component{
    render (){
        return (
            <div className = "reset">
                <button onClick={() => this.props.resetButton()}>RESET</button>
            </div>
        )
    }
}

export default Reset