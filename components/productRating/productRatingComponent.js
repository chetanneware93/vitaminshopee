angular.module("myApp")
.component("productRatingComponent",{
    bindings : {

        productDetails : "="

    },
    templateUrl : "components/productRating/productRatingComponent.html",
    controller : [productRatingController],
    controllerAs : "productRatingCtrl"
});

function productRatingController() {
    var self= this;
    self.ratingData=[];

    // for(var product of self.productDetails){
        
    //     var obj = {};
    //     var productName = "product.name";
    //     var rating = "product.rating";

    //     obj["productName"]
    // }
    
}

