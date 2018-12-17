import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoDataService from "./dataAccess/TodoDataService";
import UserDataService from "./dataAccess/UserDataService";
import TodoStore from "./stores/TodoStore";
import UserStore from "./stores/UserStore";
import TodoContainer from "./components/TodoContainer/TodoContainer";

(function startApplication(){
    const userDataService = UserDataService();
    const todoDataService = TodoDataService();
    const userStore = UserStore(userDataService);
    const todoStore = TodoStore(todoDataService, userStore);

    const stores = {
      todoStore,
      userStore
    };

    function loadStaticData(){
      return Promise.all([userStore.fetch()]);
    }

    function mountPage(){
      ReactDOM.render(
        <TodoContainer stores={stores} />,
        document.getElementById('root'));
    }

    loadStaticData().then(mountPage);
})();
