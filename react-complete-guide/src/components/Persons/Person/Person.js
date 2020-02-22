import React, {Component} from 'react';

import Aux from '../../../hoc/Auxillary';
import classes from './Person.css';
import { render } from 'react-dom';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return 
    <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
        type="text" 
        onChange={this.props.changed} 
        value={this.props.name} />
    </Aux>
    ;
  }
  
};

export default Person;

//SIDE NOTE: 
// 1. Aux : allows the rendering of adjacent JSX elements in render
// 2. Since an update, we can also simply import React module called Fragment and uses it as below

// import React, {Component, Fragment} from 'react';

// import Aux from '../../../hoc/Auxillary';
// import classes from './Person.css';
// import { render } from 'react-dom';

// class Person extends Component {
//   render() {
//     console.log('[Person.js] rendering...');
//     return 
//     <Fragment>
//         <p onClick={this.props.click}>
//           I'm {this.props.name} and I am {this.props.age} years old!
//         </p>
//         <p>{this.props.children}</p>
//         <input
//         type="text" 
//         onChange={this.props.changed} 
//         value={this.props.name} />
//     </Fragment>
//     ;
//   }
  
// };

// export default Person;
