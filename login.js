import React from 'react';
import './style.css';
import './App.css';
import Dashboard from './dashboard';
import {link, Link } from 'react-router-dom';

function Login(){
    return(

        <div className="row" id="cont">
            <div className="col-2"></div>
            <div className="col-8" id="form-cont">
                <form>
                    <h4 className="text-center">Login</h4>
                    <hr />
                    <div className="form-group">
                        <label for="usr">User Name</label>
                        <input type="text" className="form-control" placeholder="enter userName" id="usr" required/>
                    </div>
                    <div className="form-group">
                        <label for="pwd">Password</label>
                        <input type="password" className="form-control" placeholder="password" id="pwd" required/>
                    </div>
                    <div class="form-group form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" /> Remember me
                         </label>
                    </div>
                    <Link to="Dashboard">
                         <button type="submit" class="btn btn-block btn-outline-warning">Submit</button>
                    </Link>
                </form>
            </div>
            <div className="col-2"></div>
        </div>

    );
}
export default Login;