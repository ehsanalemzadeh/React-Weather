var React = require('react');
var {Link,IndexLink} = require('react-router'); // equals to : var Link = require('react-router').Link;
var myStyle ={
  fontWeight:'bold',
  // color:'black'
};

var Nav = (props)=>
(
  <div>
    <h1>Nav Component!</h1>
    <IndexLink to="/" activeClassName="active" activeStyle={myStyle}>Get Weather</IndexLink>
    <Link to="about" activeClassName="active" activeStyle={myStyle}>About</Link>
    <Link to="examples" activeClassName="active" activeStyle={myStyle}>Examples</Link>
  </div>
);

module.exports = Nav;
