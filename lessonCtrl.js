/**
 * Created by Brad.Lifferth on 10/11/2016.
 */
angular.module('directivePractice')
    .controller('lessonCtrl', function($scope, lessonService){
    $scope.lesson = lessonService.lessons;

    $scope.test = 'Two way data binding!';
    // $scope.mainInput = '';
});