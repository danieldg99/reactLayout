import React, {Component} from 'react';

const CuerpoMain = (props)=>{
    const cuerpo = props.nDiv
    let html = [];
    for (let i = 1; i<= cuerpo; i++) {
        html.push(<div>{i}</div>)    
    }
    return html
}


class Main extends Component{
    render(){
        const {nDiv} = this.props
        return(
            <main className="main">
                <CuerpoMain nDiv = {nDiv} />
            </main>
        )
    }
}

export default Main