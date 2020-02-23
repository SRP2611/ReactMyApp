import React, {Component} from 'react'
    class Counter extends Component {
        state = {
            counterValue : 0
        }
        render() {
            const {counterValue} = this.state;
        return (<div>
            <h1> {counterValue} </h1>
            <button type="button" className="btn btn-outline-primary mx-3" onClick = {()=>this.onIncrementHandler()}> increment </button>
            <button type="button" className="btn btn-outline-primary mx-3" onClick = {()=>this.onDecrementHandler()}> decrement </button>
            <button type="button" className="btn btn-outline-primary mx-3" onClick = {()=>this.onResetHandler()}> reset </button>
        </div>)
        }
        onIncrementHandler=()=> {
            console.log('increment button clicked')
            let count  = this.state.counterValue + 1
            this.setState({counterValue:count})         
        }
        onDecrementHandler=()=> {
            console.log('decrement button clicked')
            let count = this.state.counterValue - 1
            this.setState({counterValue:count})
        }
        onResetHandler=()=> {
            console.log('reset button clicked')
            this.setState({counterValue:0})
        }
    }
export default Counter