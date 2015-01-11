/** @jsx React.DOM **/

var Header = React.createClass({

    render: function(){
        return  <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Hacker News</a>
                        </div>
                    </div>
                </nav>;
    }
});