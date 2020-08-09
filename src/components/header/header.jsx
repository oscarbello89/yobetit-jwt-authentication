import React, { Component } from 'react';
import './header.css';
import Logo from '../../assets/yobetit_logo.png';
export default class Header extends Component {
    render() {
        return (
            <div className="fluid-container header">
                <section className="jumbotron bg-danger text-white text-left">
                    <div className="mastHead container">
                        <div className=" row">
                            <div className="col-sm-2"><a href="/"><img src={Logo} className="logo" alt="logo"/></a></div>
                            <div className="col-sm-10 d-none d-sm-block">
                                <h1 className="jumbotron-heading">Yobetit Test </h1>
                                <p className="lead">Api https://restcountries.eu/ with React and Redux.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

