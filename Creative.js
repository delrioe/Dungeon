angular.module('app', [])
    .controller('mainCtrl', mainCtrl)
    .directive('avatar', avatarDirective);

function mainCtrl($scope) {
    $scope.names = ["red", "blue", "gray", "brown"];

    $scope.cards = [];

    $scope.addNew = function(card) {
        //alert(user.name + ' ' + user.url);
        $scope.cards.push({
            cardName: card.name,
            cardElement: card.element,
            cardUrl: card.url,
            cardLevel: card.level,
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
    var cardColor = "{{selectedElement}}"
    return {
        scope: {
            card: '='
        },
        restrict: 'E',
        replace: 'true',
        template: ('<div class="Avatar" style="background-color:' +cardColor+ '">' +
            '<img id="img_element" ng-src="{{card.cardElement}}">' +
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
        if (!scope.card.cardElement) {
            var x = Math.floor((Math.random() * 4) + 1);
            switch (x) {
                case 1:
                    scope.card.cardElement = "img_earth.png";
                    break;
                case 2:
                    scope.card.cardElement = "img_fire.png";
                    break;
                case 3:
                    scope.card.cardElement = "img_water.png";
                    break;
                case 4:
                    scope.card.cardElement = "img_wind.png";
                    break;
                default:
                    scope.card.cardElement = "gold_star.png";
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
        
        if(scope.card.cardElement == "fire"){
            
        }else if (scope.card.cardElement == "water"){
            
        }else if (scope.card.cardElement == "wind"){
            
        }else{
            
        }

    }
}
