var app= angular.module('simpleApp', ['ui.router']);

app.config(function($stateProvider) {
    var home = {
        name: 'home',
        url: '',
        templateUrl:'views/home.html',
        controller:'indexController'
    }

    var detail = {
        name: 'home.detail',
        url:'/customer/:id',
        templateUrl:'views/detail.html',
        controller: 'detailController'
        
    }

    var edit = {
        name: 'edit',
        url:'/edit',
        templateUrl:'views/edit.html',
        controller: 'editController'
    }

    var editDetail = {
        name: 'edit.detail',
        url:'/edit/:id',
        templateUrl:'views/editDetail.html',
        controller:'editDetailController'
    }

    var addCustomer = {
        name:'addCustomer',
        url:'addCustomer',
        templateUrl:'views/addCustomer.html',
        controller:'addCustomer'
    }

    $stateProvider.state(home);
    $stateProvider.state(detail);
    $stateProvider.state(edit);
    $stateProvider.state(editDetail);
    $stateProvider.state(addCustomer);
});