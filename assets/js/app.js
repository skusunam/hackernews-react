/** @jsx React.DOM **/

var App = React.createClass({
    render: function () {
        return <div>
            <Header />
            <div className="container">
                <div className="starter-template">
                    <NewsList />
                </div>
            </div>
        </div>;
    }
});

React.render(<App />, document.getElementById('app'));
