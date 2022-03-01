angular.module("app").config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl: "app/templates/home.html"
    })
    .when("/buy",{
        templateUrl: "app/templates/buy.html"
    })
    .when("/comingsoon",{
        templateUrl: "app/templates/comingsoon.html"
    })
    .when("/contact",{
        templateUrl: "app/templates/contact.html"
    })
    .when("/decorations",{
        templateUrl: "app/templates/decorations.html"
    })
    .when("/kitchen",{
        templateUrl: "app/templates/kitchen.html"
    })
    .when("/livingroom",{
        templateUrl: "app/templates/livingroom.html"
    })
    .when("/privacy",{
        templateUrl: "app/templates/privacy.html"
    })
    .otherwise({
        templateUrl: "app/templates/error.html"
    });
});