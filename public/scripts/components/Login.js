var React = require("react");
var Link = require("react-router").Link;

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<input type="text"/>
				<input type="password"/>
				or
				<a href={window.location.origin + "/user/auth/google"}>Sign in with Google</a>
			</div>
		);
	}
});
