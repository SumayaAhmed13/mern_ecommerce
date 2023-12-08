const express =require("express");
const router=express.Router();
const ProductCtrl=require("../controller/ProductController");
const UserCtrl=require('../controller/UserController')


//Product Api
router.get('/ProductBrandList',ProductCtrl.ProductBrandList);
router.get('/ProductCategoryList',ProductCtrl.ProductCategoryList);
router.get('/ProductSliderList',ProductCtrl.ProductSliderList);
router.get('/ProductListByBrand/:BrandID',ProductCtrl.ProductListByBrand);
router.get('/ProductListByCategory/:CategoryID',ProductCtrl.ProductListByCategory);
router.get('/ProductListByRemark/:Remark',ProductCtrl.ProductListByRemark);
router.get('/ProductListBySimilar/:Keyword',ProductCtrl.ProductListBySimilar);
router.get('/ProductListByKeyword/:Keyword',ProductCtrl.ProductListByKeyword);

router.get('/ProductReviewList/:ProductID',ProductCtrl.ProductReviewList);
router.get('/ProductDetail/:ProductID',ProductCtrl.ProductDetail);


//User Api
router.get('/CreateProductReview',UserCtrl.CreateProductReview);

module.exports=router;