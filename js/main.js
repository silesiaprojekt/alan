var myApp = angular.module('myApp', []);

myApp.controller('GreetingController', ['$scope', function($scope) {

$scope.team = [{
  "id": 1,
  "project": "Cream",
  "leader": "Andrzej",
  "email": "andrzej@poczta.pl",
  "subleader": "Norbert",
  "value": "40%",
  "employees": [
    {"firstName":"Marek", "lastName":"Nowak", "interest":10}
]
}, {
  "id": 2,
  "project": "Projekt 2",
  "leader": "Gilbert2",
  "subleader": "Norbert2",
  "value": "20%",
  "employees": [
    {"firstName":"John", "lastName":"Doe", "interest":20},
    {"firstName":"Anna", "lastName":"Smith", "interest":80}
]
}, {
  "id": 3,
  "project": "Projekt 2",
  "leader": "Gilbert3",
  "subleader": "Norbert3",
  "value": "80%",
  "employees": [
    {"firstName":"John", "lastName":"Doe", "interest":40},
    {"firstName":"Anna", "lastName":"Smith", "interest":50},
    {"firstName":"Peter", "lastName":"Jones", "interest":20}
]
}]

}]);
