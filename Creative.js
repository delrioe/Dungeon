angular.module('app', [])
.controller('mainCtrl', mainCtrl)
.directive('avatar', avatarDirective);


function mainCtrl ($scope){
    $scope.users= [];
    
    
    
    $scope.addNew = function(card){
        //alert(user.name + ' ' + user.url);
        $scope.cards.push({
            cardName: card.name,
            cardElement: card.element,
            cardUrl: card.url,
            cardLevel: card.level,
            cardDescription: card.descript,
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
                    '<p> {{ '
                    
                    
                    
                    '<img ng-src="{{user.avatarUrl}}" />' + 
                    '<h2>{{user.name}}</h2>' + 
                    '<p> {{user.avatarEmail}}</p>' +
                    '</div>' + '</div>'), 
        link : link
    };
    function link(scope) {
        if(!scope.user.avatarUrl){
            scope.user.avatarUrl = 'https://www.drupal.org/files/issues/default-avatar.png';
        }
    }
}







