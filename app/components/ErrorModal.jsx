var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
    getDefaultProps: function() {
        return {
            title: 'Error'
        };
    },
    propTypes: {
        // this will help for developers to understand what data-type
        // is used by the component.
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    componentDidMount: function () {
        var {title, message} = this.props;
        var modalMarkup = (
        <div id="error-modal" className="reveal tiny text-center" data-reveal="">
            <h4>{title}</h4>
            <p>{message}</p>
            <p>
                <button className="button" data-close="">
                    Okay
                </button>
            </p>

        </div>
    );

        // foundation code replaces the rendered code once the wrong input given into
        // the search bar. So we need to render it after the component is mount.
        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);

        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function () {
        var {title, message} = this.props;

        return (
            <div>
            </div>
        )
    }
});

module.exports = ErrorModal;