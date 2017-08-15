var MyContainer = React.createClass({
    getInitialState:()=>{
        return {
            checked:true
        }
    },
    render(){
        return <ToggleButton text="Toggle me" checked={this.state.checked} />
    }
})

var ToggleButton = React.createClass({
    render(){
        return <div>
            <label>{this.props.text}:<input type="checkbox" checked={this.props.checked}/></label>
        </div>
    }
})

ReactDOM.render(
    <div>
        <MyContainer/>
    </div>,document.getElementById('content')
);