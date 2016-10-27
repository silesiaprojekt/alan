var myApp = angular.module('myApp', []);

myApp.controller('GreetingController', ['$scope', function($scope) {

$scope.team = [{
  "id": 1,
  "project": "Cream",
  "color": "rgba(0, 128, 0, 0.4)",
  "leader": "Andrzej Kowalski",
  "email": "andrzej@poczta.pl",
  "subleader": "Norbert Nowakowski",
  "value": "40%",
  "employees": [
      {"firstName":"Marek", "lastName":"", "position":"developer", "img": "male1.png"},
      {"firstName":"Tomek", "lastName":"", "position":"admin", "img": "male3.png"},
      {"firstName":"Zenek", "lastName":"", "position":"developer", "img": "female3.png"},
      {"firstName":"Robert", "lastName":"", "position":"marketing", "img": "male1.png"},
      {"firstName":"Franek", "lastName":"", "position":"developer", "img": "female2.png"},
      {"firstName":"Emil", "lastName":"", "position":"developer", "img": "male1.png"},
      {"firstName":"Kamil", "lastName":"", "position":"back-end", "img": "male3.png"},
      {"firstName":"Tomasz", "lastName":"", "position":"developer", "img": "female3.png"},
      {"firstName":"Rafał", "lastName":"", "position":"developer", "img": "male1.png"},
      {"firstName":"Zenon", "lastName":"", "position":"back-end", "img": "female2.png"},
      {"firstName":"Kamil", "lastName":"", "position":"developer", "img": "female1.png"}
]
}, {
  "id": 2,
  "project": "brackets",
    "color": "rgba(94, 162, 255, 0.4);",
  "leader": "Marek Nowakowski",
  "subleader": "Andrzej Kowalski",
  "value": "20%",
  "employees": [
      {"firstName":"Kamil", "lastName":"", "position":"developer", "img": "male3.png"},
      {"firstName":"Tomasz", "lastName":"", "position":"developer", "img": "female3.png"},
      {"firstName":"Rafał", "lastName":"", "position":"back-end", "img": "male1.png"},
      {"firstName":"Zenon", "lastName":"", "position":"ux-designer", "img": "female2.png"}
]
}, {
  "id": 3,
  "project": "mobile zone",
    "color": "rgba(253, 118, 69, 0.4);",
  "leader": "Ryszard Zawadzki",
  "subleader": "Marek Nowakowski",
  "value": "80%",
  "employees": [
    {"firstName":"Robert", "lastName":"", "position":"developer", "img": "male1.png"},
      {"firstName":"Franek", "lastName":"", "position":"developer", "img": "female2.png"},
      {"firstName":"Emil", "lastName":"", "position":"front-end", "img": "male1.png"},
      {"firstName":"Kamil", "lastName":"", "position":"developer", "img": "male3.png"}
]
}]

}]);
