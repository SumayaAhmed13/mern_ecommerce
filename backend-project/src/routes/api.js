const express =require("express");
const router=express.Router();
const ProductCtrl=require("../controller/ProductController");
const UserCtrl=require('../controller/UserController');
const WishCtrl=require("../controller/WishListController");
const CartCtrl=require("../controller/CartListController");
const InvoiceCtrl=require("../controller/InvoiceController");
const AuthVerification=require("../middleware/AuthVerification");

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

// Cart List Api
router.get('/CartList',AuthVerification,CartCtrl.CartList);
router.post('/SaveCartList',AuthVerification,CartCtrl.SaveCartList);
router.post('/UpdateCartList/:cartID',AuthVerification,CartCtrl.UpdateCartList);
router.post('/RemoveCartList',AuthVerification,CartCtrl.RemoveCartList);

// Invoice & Payment Api
router.get('/CreateInvoice',AuthVerification,InvoiceCtrl.CreateInvoice);
router.get('/InvoiceList',AuthVerification,InvoiceCtrl.InvoiceList);
router.get('/InvoiceProductList/:invoice_id',AuthVerification,InvoiceCtrl.InvoiceProductList);
router.post('/PaymentSuccess/:trxID',InvoiceCtrl.PaymentSuccess);
router.post('/PaymentCancel/:trxID',InvoiceCtrl.PaymentCancel);
router.post('/PaymentFail/:trxID',InvoiceCtrl.PaymentFail);
router.post('/PaymentIPN/:trxID',InvoiceCtrl.PaymentIPN);

module.exports=router;