angular.module('app', [])
.controller('mainCtrl', mainCtrl)
.directive('avatar', avatarDirective);


function mainCtrl ($scope){
    $scope.users= [];
    
    
    
    $scope.addNew = function(user){
        //alert(user.name + ' ' + user.url);
        $scope.users.push({
            name: user.name,
            avatarUrl: user.url,
            avatarEmail: user.email
        });
        
        user.name = '';
        user.url = '';
        user.email = '';
    };
}

function avatarDirective (){
    return {
        scope : {
            user: '=' 
        },
        restrict: 'E',
        replace: 'true',
        template: ('<div class="AvatarBorder">' +
                    '<div class="Avatar">' + 
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







