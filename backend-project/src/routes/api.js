const express =require("express");
const router=express.Router();
const ProductCtrl=require("../controller/ProductController");
const UserCtrl=require('../controller/UserController');
const WishCtrl=require("../controller/WishListController");
const AuthVerification=require("../middleware/AuthVerification")



//Product Api
router.get('/ProductBrandList',ProductCtrl.ProductBrandList);
router.get('/ProductCategoryList',ProductCtrl.ProductCategoryList);
router.get('/ProductSliderList',ProductCtrl.ProductSliderList);
router.get('/ProductListByBrand/:BrandID',ProductCtrl.ProductListByBrand);
router.get('/ProductListByCategory/:CategoryID',ProductCtrl.ProductListByCategory);
router.get('/ProductListBySimilar/:CategoryID',ProductCtrl.ProductListBySimilar);
router.get('/ProductListByRemark/:Remark',ProductCtrl.ProductListByRemark);
router.get('/ProductListByKeyword/:Keyword',ProductCtrl.ProductListByKeyword);
router.get('/ProductReviewList/:ProductID',ProductCtrl.ProductReviewList);
router.get('/ProductDetail/:ProductID',ProductCtrl.ProductDetail);


//User Api
router.get('/CreateProductReview',UserCtrl.CreateProductReview);
router.get('/UserOTP/:email',UserCtrl.UserOTP);
router.get('/VerifyLogin/:email/:otp',UserCtrl.VerifyLogin);
router.get('/UserLogout',AuthVerification,UserCtrl.UserLogout);
router.post('/CreateProfile',AuthVerification,UserCtrl.CreateProfile);
router.post('/UpdateProfile',AuthVerification,UserCtrl.UpdateProfile);
router.get('/ReadProfile',AuthVerification,UserCtrl.ReadProfile);


//Wish List Api
router.get('/WishList',AuthVerification,WishCtrl.WishList);
router.post('/SaveWishList',AuthVerification,WishCtrl.SaveWishList);
router.post('/RemoveWishList',AuthVerification,WishCtrl.RemoveWishList);

module.exports=router;