var MyContainer = React.createClass({
    getInitialState:()=>{
        return {
            checked:false
        }
    },
    onChildChange(newState){
        this.setState({checked:newState})
    },
    render(){
        var isChecked = this.state.checked ? 'yes' : 'no'
        return <div>
            <h4>Are yao checked:{isChecked}</h4>
            <ToggleButton text="Toggle me" initialChecked={this.state.checked} callbackParent={this.onChildChange}/>
        </div>
    }
})

var ToggleButton = React.createClass({
    getInitialState(){
      return {
          checked:this.props.initialChecked
      }
    },
    onTextChange(){
      var newState = !this.state.checked;
        this.setState({checked:newState});
        this.props.callbackParent(newState);
    },
    render(){
        return <div>
            <label>{this.props.text}:<input type="checkbox" checked={this.state.checked} onChange={this.onTextChange}/></label>
        </div>
    }
});



ReactDOM.render(
    <div>
        <MyContainer/>
    </div>,document.getElementById('content')
);