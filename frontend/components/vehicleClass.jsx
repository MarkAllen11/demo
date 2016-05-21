var React = require('react');
var AppActions = require('../actions/appActions');

var VehicleClass = React.createClass({

  _nextPage: function (e) {
    e.preventDefault();
    AppActions.changePage(2);
  },

  render: function () {
    return (
      <div className="vehicle-class">

      <button onClick={this._nextPage}>Retreive</button>
      </div>
    );
  }

});

module.exports = VehicleClass;
