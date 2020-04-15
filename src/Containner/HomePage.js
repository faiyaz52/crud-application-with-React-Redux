import React from 'react';
import { exact } from 'prop-types';

class HomePage extends React.Component {
     constructor(props){
         super(props)
     }
 

    render(){
 return(
     <div>
         <h1 style={{textAlign:"center"}}>Welcome to Home</h1>
     </div>          
 );
}
}
export default HomePage;