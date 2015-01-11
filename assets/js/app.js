/** @jsx React.DOM **/

var App = React.createClass({
    render: function () {
        return <div>
            <Header />
            <div className="container">
                <div className="starter-template">
                    <h1>Bootstrap starter template</h1>
                    <NewsList />
                </div>
            </div>
        </div>;
    }
});

React.render(<App />, document.getElementById('app'));
