import React from "react";
import './Home.css'


class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        if(location.state === undefined){
            //undefined일때 집으로 보내는 방법
            history.push("/")
        }
    }
    
    
    render(){
        //첫번째 방식(location에 state가 undefined가 아닐때만 렌더.)
        const { location } = this.props;
        if(location.state){
            // const {location: {state: {genres, poster, rating, summary, title, year}}} = this.props
            return(
                <div className="container detail__container">
                    <div className="detail__container__contents">
                        <img src={location.state.poster} alt={location.state.title}></img>
                        <h3>{location.state.title}</h3>
                        <span>{location.state.year}</span>
                        <span>{location.state.genres}</span>
                        <span>{location.state.rating}</span>
                        <h5>{location.state.summary}</h5>

                    </div>

                </div>
            )
        }else{
            return null;
        }
    }
}


export default Detail;


//아래의 방식으로 진행하게 된다면, render()이 가장 먼저 실행되게 되고;
        //현 상황에서는 location is undefined;
        //so I will get {{{TypeError: Cannot read property 'title' of undefined}}} error
        //TWO WAYS to fix this problem;

        // const { location } = this.props;
        // return <span> {location.state.title}</span>

        // THE FIRST WAY
        // const { location } = this.props;
        // if(location.state){
        //     return <span> {location.state.title}</span>
        // }else{
        //     return null;
        // }