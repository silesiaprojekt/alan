var myApp = angular.module('myApp', []);

myApp.controller('GreetingController', ['$scope', function($scope) {

$scope.team = [{
  "id": 1,
  "project": "Cream",
  "leader": "Andrzej Kowalski",
  "email": "andrzej@poczta.pl",
  "subleader": "Norbert Nowakowski",
  "value": "40%",
  "employees": [
      {"firstName":"John", "lastName":"Doe", "interest":20},
      {"firstName":"John", "lastName":"Doe", "interest":20},
      {"firstName":"John", "lastName":"Doe", "interest":20},
      {"firstName":"John", "lastName":"Doe", "interest":20},
      {"firstName":"John", "lastName":"Doe", "interest":20},
    {"firstName":"Marek", "lastName":"Nowak", "interest":10}
]
}, {
  "id": 2,
  "project": "brackets",
  "leader": "Andrzej Kowalski",
  "subleader": "Andrzej Kowalski",
  "value": "20%",
  "employees": [
    {"firstName":"John", "lastName":"Doe", "interest":20},
      {"firstName":"John", "lastName":"Doe", "interest":20},
      {"firstName":"John", "lastName":"Doe", "interest":20},
      {"firstName":"John", "lastName":"Doe", "interest":20},
      {"firstName":"John", "lastName":"Doe", "interest":20},
      {"firstName":"John", "lastName":"Doe", "interest":20},
    {"firstName":"Anna", "lastName":"Smith", "interest":80}
]
}, {
  "id": 3,
  "project": "mobile zone",
  "leader": "Marek Nowakowski",
  "subleader": "Marek Nowakowski",
  "value": "80%",
  "employees": [
    {"firstName":"John", "lastName":"Doe", "interest":40},
    {"firstName":"Anna", "lastName":"Smith", "interest":50},
      {"firstName":"Anna", "lastName":"Smith", "interest":50},
      {"firstName":"Anna", "lastName":"Smith", "interest":50},
      {"firstName":"Anna", "lastName":"Smith", "interest":50},
      {"firstName":"Anna", "lastName":"Smith", "interest":50},
      {"firstName":"Anna", "lastName":"Smith", "interest":50},
      {"firstName":"Anna", "lastName":"Smith", "interest":50},
      {"firstName":"Anna", "lastName":"Smith", "interest":50},
      {"firstName":"Anna", "lastName":"Smith", "interest":50},
      {"firstName":"Anna", "lastName":"Smith", "interest":50},
      {"firstName":"Anna", "lastName":"Smith", "interest":50},
    {"firstName":"Peter", "lastName":"Jones", "interest":20}
]
}]

}]);
