var React = require('react');
var AppActions = require('../actions/appActions');

var Aggregate = React.createClass({

  _nextPage: function (e) {
    e.preventDefault();
    AppActions.changePage(1);
  },

  render: function () {
    return (
      <div className="aggregate">

        <button onClick={this._nextPage}>Vehile Class</button>
      </div>
    );
  }

});

module.exports = Aggregate;
