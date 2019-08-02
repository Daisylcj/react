import React, {Component} from 'react';
import ReactDom from 'react-dom';
import './style.scss'
import { func } from 'prop-types';

const name='world123'
const element = (
    <p className='red'>
        <img src={url}/>
    </p>
    );
const img = <img src={url}/>
const url = './assets/lcj.png'
const user={
    fName:'亲爱的',
    lName:'热爱的'
}
function concatNames(a,b,flag){
    if(flag){
        return <h1>hello,{a}</h1>
    }else{
        return <h1>hello,{b}</h1>
    }
}
// function Clock(props){
//     return (
//         <div>
//             <h1>Hello, world!!</h1>
//             <h2>It is {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     )
// }
// function tick(){
//     ReactDom.render(
//         <Clock date={new Date()}/>,
//         document.getElementById('time')
//     )
// }
// setInterval(tick,1000)
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date:new Date()}
    }
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
          date: new Date()
        });
    }
    render(){
        return(
            <div>
                <h1>Hello, world!!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}
function Welcome(props){//组件名称必须以大写字母开头,React 会将以小写字母开头的组件视为原生 DOM 标签。
    //例如，<div /> 代表 HTML 的 div 标签，而 <Welcome /> 则代表一个组件，并且需在作用域内使用 Welcome
    return <h2>hello,{props.name}</h2>
}
class App extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div>
                {concatNames(user.fName,user.lName,false)}
                <div id='time'></div>
                <Welcome name='lily'/>
                <Welcome name="Cahal" />
                <Welcome name="Edite" />
                <Clock/>
            </div>
        )
    }
}
export default App;
ReactDom.render(<App />,document.getElementById('root'));