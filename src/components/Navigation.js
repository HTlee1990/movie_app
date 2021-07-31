import React from "react";
import {Link} from "react-router-dom"
import styled from "styled-components"
// import "./Navigation.css"
import"../routes/Home.css"

    const Hover = styled.div`
        margin: 10px;
        box-shadow: 0 13px 27px -5px rgb(50 50 93 / 25%), 0 8px 16px -8px rgb(0 0 0 / 30%), 0 -6px 16px -6px rgb(0 0 0 / 3%);
        &:hover{
            box-shadow: 5px 10px 27px -5px rgb(50 50 93 / 70%), 0 8px 16px -8px rgb(0 0 0 / 50%), 0 -6px 16px -6px rgb(0 0 0 / 5%);
            
        }
    `;


function Navigation(){

    return (
      <div className="movie__navigation">
        <Hover><Link to="/">Home</Link></Hover>
        <Hover><Link to="/about">About</Link></Hover>
      </div>
    );
}

export default Navigation;