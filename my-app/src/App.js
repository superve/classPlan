import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class PanelHeader extends React.Component{
  render(){
    return(
<div className="panel-heading">
            <h3 className="panel-title"> {this.props.name}</h3>
          </div>
    )
  }
}

class PanelBody extends React.Component{
  static defaultProps = {
    color: 'default'
  }
  render(){
    return(
      <div className="panel-body">
            {this.props.name}-{this.props.color}
          </div>
    )
  }
}

class PanelFooter extends React.Component{
  render(){
    return (
      <div className="panel-footer">
      {this.props.name}
    </div>
    )
  }
}
class Pannel extends React.Component {
  constructor(){
    super();
    this.state = {
      color: '',
      body: 'body'
    }
  }
  handleChaneColorDanger = () => {
    console.log('红色');
    // this.setState({color: 'red'});
   
  
    this.setState(function (prevState, prors) {
      console.log( prevState );
      console.log( prors );
      
      
    })
    
  }

  handleChaneColorSuccess =() => {
    console.log('绿色');
    this.setState({color: 'green'})


  }

  render() {
    return (

      <div>
        
        <button type="button" className="btn btn-danger" onClick={
          this.handleChaneColorDanger
        }>变红色</button>
        
        <button type="button" className="btn btn-success" onClick={
           this.handleChaneColorSuccess
        }>变绿色</button>
        
        
        <div className="panel panel-danger">
          <PanelHeader name="头部"></PanelHeader>
          <PanelBody name="身体" color={this.state.color}></PanelBody>
          <PanelFooter name='底部'></PanelFooter>
        </div>

      </div>

    )

  }
}


export default class Container extends React.Component {

  render() {
    return (

      <div className="container">
        <h1>React基础学习</h1>
        <hr />
        <Pannel name="panel" />

      </div>
    )
  }
}