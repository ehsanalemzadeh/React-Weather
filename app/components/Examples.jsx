var React = require('react');

// var Examples = React.createClass({
//   render: function(){
//     return(
//       <h3>Examples Component</h3>
//     );
//   }
// });


// Arrow Function Simplification
var Examples = (props)=> (
  <div>
    <h3>Examples Component</h3>
    <p>Welcome</p>
  </div>);


module.exports = Examples;
