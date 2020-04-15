import React from 'react';
import { exact } from 'prop-types';

class Notification extends React.Component {
     constructor(props){
         super(props)
     }
 

    render(){
 return(
     <div>
         <h1 style={{textAlign:"center"}}>Page Not Found</h1>
     </div>          
 );
}
}
export default Notification;