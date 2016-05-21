var AppDispatcher = require('../dispatcher/dispatcher');
var AppConstants = require('../constants/appConstants');

var AppActions = {

  changePage: function (page) {
    var action = {
      actionType: AppConstants.NEXT_PAGE,
      page: page
    };
    AppDispatcher.dispatch(action);
  }

};

module.exports = AppActions;
