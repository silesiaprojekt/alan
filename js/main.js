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
      {"firstName":"John", "lastName":"Doe", "position":"developer", "img": "male1.png"},
      {"firstName":"John", "lastName":"Doe", "position":"developer", "img": "male3.png"},
      {"firstName":"John", "lastName":"Doe", "position":"developer", "img": "female3.png"},
      {"firstName":"John", "lastName":"Doe", "position":"developer", "img": "male1.png"},
      {"firstName":"John", "lastName":"Doe", "position":"developer", "img": "female2.png"},
      {"firstName":"John", "lastName":"Doe", "position":"developer", "img": "male1.png"},
      {"firstName":"John", "lastName":"Doe", "position":"developer", "img": "male3.png"},
      {"firstName":"John", "lastName":"Doe", "position":"developer", "img": "female3.png"},
      {"firstName":"John", "lastName":"Doe", "position":"developer", "img": "male1.png"},
      {"firstName":"John", "lastName":"Doe", "position":"developer", "img": "female2.png"},
      {"firstName":"John", "lastName":"Doe", "position":"developer", "img": "female1.png"}
]
}, {
  "id": 2,
  "project": "brackets",
  "leader": "Andrzej Kowalski",
  "subleader": "Andrzej Kowalski",
  "value": "20%",
  "employees": [
    {"firstName":"John", "lastName":"Doe", "position":"developer", "img": "female3.png"},
      {"firstName":"John", "lastName":"Doe", "position":"developer", "img": "female2.png"},
      {"firstName":"John", "lastName":"Doe", "position":"developer", "img": "male1.png"},
      {"firstName":"John", "lastName":"Doe", "position":"developer", "img": "female1.png"},
      {"firstName":"John", "lastName":"Doe", "position":"developer", "img": "male3.png"}
]
}, {
  "id": 3,
  "project": "mobile zone",
  "leader": "Marek Nowakowski",
  "subleader": "Marek Nowakowski",
  "value": "80%",
  "employees": [
    {"firstName":"John", "lastName":"Doe", "position":"developer", "img": "male1.png"},
      {"firstName":"John", "lastName":"Doe", "position":"developer", "img": "female2.png"},
      {"firstName":"John", "lastName":"Doe", "position":"developer", "img": "female3.png"},
      {"firstName":"John", "lastName":"Doe", "position":"developer", "img": "female1.png"}
]
}]

}]);
