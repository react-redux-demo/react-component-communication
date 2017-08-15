var Parent = React.createClass({
    getInitialState(){
        return {
            msg:"start"
        }
    },
    transferMsg(msg){
        this.setState({msg:msg})
    },
    componentDidUpdate(){
        console.log("parent update")
    },
    render(){
        return <div>
            <Child_1 transferMsg={msg=>this.transferMsg(msg)}/>
            <Child_2 msg={this.state.msg}/>
        </div>
    }
})

var  Child_1 = React.createClass({
    componentDidMount() {
        setTimeout(() => {
            this.props.transferMsg('end')
        }, 1000);
    },

    componentDidUpdate() {
        console.log('Child_1 update');
    },

    render() {
        return <div>
            <p>child_1 component</p>
        </div>
    }
})

var Child_2 = React.createClass({
    componentDidUpdate() {
        console.log('Child_2 update');
    },

    render() {
        return <div>
            <p>child_2 component: {this.props.msg}</p>
        </div>
    }
})

ReactDOM.render(
    <div>
        <Parent/>
    </div>,document.getElementById('content')
);