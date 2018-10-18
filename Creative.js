angular.module('app', [])
.controller('mainCtrl', mainCtrl)
.directive('avatar', avatarDirective);


function mainCtrl ($scope){
    $scope.cards= [];
    
    
    
    $scope.addNew = function(card){
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

function avatarDirective (){
    return {
        scope : {
            card: '=' 
        },
        restrict: 'E',
        replace: 'true',
        template: ('<div class="AvatarBorder">' +
                    '<div class="Avatar">' + 
                    '<p> {{card.cardName}}</p> ' +
                    //'<img ng-src="{{card.element}}" />' +
                    '<p> {{card.cardElement}}</p>' +
                    '<img ng-src="{{card.cardUrl}}" />' + 
                    '<p> {{card.cardLevel}}</p>' +
                    '<p> {{card.cardDescript}}</p>' +
                    '<p> {{card.cardRarity}} </p>' +
                    '</div>' + '</div>'), 
        link : link
    };
    function link(scope) {
        if(!scope.card.cardUrl){
            scope.card.cardUrl = 'https://www.drupal.org/files/issues/default-avatar.png';
        }
    }
}







