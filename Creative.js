angular.module('app', [])
    .controller('mainCtrl', mainCtrl)
    .directive('avatar', avatarDirective);

function mainCtrl($scope) {
    $scope.colors = ["Fire", "Water", "Wind", "Earth"];
    //$scope.colors = ["red", "blue"]
    $scope.cards = [];

    $scope.addNew = function(card) {
        var color = "";
        if(card.element === "Fire"){
            color = "#ba6b66";
        }else if(card.element === "Water"){
            color = "#6196ed";
        }else if (card.element === "Wind"){
            color = "#c1c0bf";
        }else if(card.element === "Earth"){
            color = "#ba8550";
        }else{
            card.element = 0;
        }
        
        //alert(user.name + ' ' + user.url);
        $scope.cards.push({
            cardName: card.name,
            cardElement: card.element,
            cardColor: color,
            cardUrl: card.url,
            //cardLevel: card.level,
            cardDescript: card.descript,
            cardRarity: card.rarity
        });

        card.name = '';
        card.element = '';
        card.url = '';
        card.level = '';
        card.descript = '';
        card.rarity = '';
    };
}

// var app = angular.module('myApp', []);
// app.controller('myCtrl', function($scope) {
//     $scope.names = ["Emil", "Tobias", "Linus"];
// });


function avatarDirective() {
    return {
        scope: {
            card: '='
        },
        restrict: 'E',
        replace: 'true',
        template: ('<div class="Avatar" style="background-color:{{card.cardColor}}">' +
            '<img id="img_element" ng-src="{{card.cardElement}}.png">' +
            '<h2> {{card.cardName}}</h2> ' +
            '<img ng-src="{{card.cardUrl}}" />' +
            '<img id="img_level" ng-src="gold_star.png">' +
            '<div id="description_box">' +
            '<p>{{card.cardDescript}}</p>' +
            '</div>' +
            '<p id="rare_status">{{card.cardRarity}}</p>' +
            '</div>'),
        link: link
    };
    function link(scope) {
        // no name provided
        if(!scope.card.cardName) {
            scope.card.cardName = "Unknown";
        }
        
        // No image provided
        if (!scope.card.cardUrl) {
            scope.card.cardUrl = 'https://www.drupal.org/files/issues/default-avatar.png';
        }
        
        // No element provided
        if (scope.card.cardElement === 0) {
            var x = Math.floor((Math.random() * 4) + 1);
            switch (x) {
                case 1:
                    scope.card.cardElement = "Earth";
                    scope.card.cardColor = "#ba8550";
                    break;
                case 2:
                    scope.card.cardElement = "Fire";
                    scope.card.cardColor= "#ba6b66";
                    break;
                case 3:
                    scope.card.cardElement = "Water";
                    scope.card.cardColor = "#6196ed";
                    break;
                case 4:
                    scope.card.cardElement = "Wind";
                    scope.card.cardColor = "#c1c0bf"
                    break;
                default:
                    scope.card.cardElement = "Wind";
                    break;
            }
        }
        
        // //No Level
        // if(!scope.card.cardLevel){
        //     var x = Math.floor((Math.random() * 7) + 1);
        //     scope.card.cardLevel = ""
        // }
        
        //No Description
        if(!scope.card.cardDescript){
            scope.card.cardDescript = "Unknown description.";
        }
        
        //No Rarity
        if(!scope.card.cardRarity){
            var x = Math.floor((Math.random() * 4) + 1);
            switch (x) {
                case 1:
                    scope.card.cardRarity = "Common";
                    break;
                case 2:
                    scope.card.cardRarity = "Rare";
                    break;
                case 3:
                    scope.card.cardRarity = "Weird";
                    break;
                case 4:
                    scope.card.cardRarity = "Super Weird";
                    break;
                default:
                    scope.card.cardRarity = "Super Weird";
                    break;
            }
        }
        

    }
}
