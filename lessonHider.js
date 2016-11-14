/**
 * Created by Brad.Lifferth on 10/11/2016.
 */
angular.module('directivePractice')
    .directive('lessonHider', function() {
    return {
        templateUrl: 'lessonHider.html',
        restrict: 'E',
        scope: {
            lesson: '='
            // lessons: '='
        },
        controller: function($scope, lessonService) {
            $scope.getSchedule = lessonService.getSchedule();
        },
        link: function(scope, element, attributes) {
            scope.getSchedule.then(function(response) {
                scope.schedule = response.data;
            });
            // console.log(scope);
            // console.log(element);
            // console.log(attributes);
        }
    };
});