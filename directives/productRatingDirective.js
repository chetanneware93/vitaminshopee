angular.module("myApp")
.directive("productRatingDirective",function(){
    return{
        restrict:"E",
        tempalteUrl:"directives/productRatingsDirectives.js"
    }
})