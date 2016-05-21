var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var AppConstants = require('../constants/appConstants');

var AppStore = new Store(AppDispatcher);

var _currentPage = 0;

AppStore.currentPage = function () {
  return _currentPage;
};

AppStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case AppConstants.NEXT_PAGE:
      _currentPage = payload.page;
      this.__emitChange();
      }
};

module.exports = AppStore;
