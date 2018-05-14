import * as React from 'react';
import {Link} from 'react-router';

export const Header:React.StatelessComponent<{}> =()=>{
  return(
   <div>   
        <nav className="navbar navbar-default">
            <div className="container">
                <ul className="nav navbar-nav">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/members">Members</Link></li>
                </ul>
            </div>
        </nav>
  </div>
  );
}