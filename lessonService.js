/**
 * Created by Brad.Lifferth on 10/11/2016.
 */
angular.module('directivePractice').service('lessonService', function() {

        return $http.get('schedule.json');


    // var lessons = [
        // {
        //     lesson: 'Services'
        // },
        // {
        //     lesson: 'Routing'
        // },
        // {
        //     lesson: 'Directives'
        // },
        // {
        //     lesson: 'Review'
        // },
        // {
        //     lesson: 'Firebase'
        // },
        // {
        //     lesson: 'No server project'
        // },
        // {
        //     lesson: 'Node'
        // },
        // {
        //     lesson: 'Express'
        // },
        // {
        //     lesson: 'React'
        // }
    // ];
});