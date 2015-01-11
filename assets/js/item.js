/** @jsx React.DOM **/

var Item = React.createClass({

    render: function() {
        var post = this.props.post;

        return <li>
            <a href={post.url}>{post.title}</a>
        </li>;

    }
});