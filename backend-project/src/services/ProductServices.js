const BrandModel=require('../models/BrandModel');
const CategoryModel=require('../models/CategoryModel');
const ProductModel= require('../models/ProductModel');
const ProductSlider= require('../models/ProductSlider');
const ProductDetailModel= require('../models/ProductDetailModel');
const ReviewModel= require('../models/ReviewModel');
const mongoose= require('mongoose');

const ObjectId=mongoose.Types.ObjectId;

const BrandListService=async()=>{
   
    try{
        let data=await BrandModel.find();
        return {status:"Success",data:data}
    }
    catch(e){
        return {status:"Fail",data:e}.toString()
    }
 }

const CategoryListService=async()=>{
    try{
        let data=await CategoryModel.find();
        return {status:"Success",data:data}
     }
    catch(e){
        return {status:"Fail",data:e}.toString()
    }
}

const SliderListService=async()=>{
    try{
        let data=await ProductSlider.find();
        return {status:"Success",data:data}
     }
    catch(e){
        return {status:"Fail",data:e}.toString()
    }
}

const ListByBrandService=async(req)=>{
    try{
        let BrandID=new ObjectId(req.params.BrandID);
        let MatchStage={$match:{brandID:BrandID}};
        let JoinWithBrandStage={$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage={$unwind:"$brand"};
        let UnwindCategoryStage={$unwind:"$category"};
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'brandID':0,'categoryID':0}};
    
        let data=await ProductModel.aggregate([
            MatchStage,JoinWithBrandStage,
            JoinWithCategoryStage,UnwindBrandStage,
            UnwindCategoryStage,ProjectionStage
         ])
        return {status:"Success",data:data}

    }
    catch(e){
        return {status:"Fail",data:e}.toString()
    }
}

const ListByCategoryService=async(req)=>{
    try{
        let CategoryID=new ObjectId(req.params.CategoryID);
        let MatchStage={$match:{categoryID:CategoryID}};
        let JoinWithBrandStage={$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage={$unwind:"$brand"};
        let UnwindCategoryStage={$unwind:"$category"};
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'brandID':0,'categoryID':0}};
    
        let data=await ProductModel.aggregate([
            MatchStage,JoinWithBrandStage,
            JoinWithCategoryStage,UnwindBrandStage,
            UnwindCategoryStage,ProjectionStage
         ])
        return {status:"Success",data:data}

    }
    catch(e){
        return {status:"Fail",data:e}.toString()
    }
}
const ListByRemarkService=async(req)=>{
    try{
        let Remark=new ObjectId(req.params.Remark);
        let MatchStage={$match:{remark:Remark}};
        let JoinWithBrandStage={$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage={$unwind:"$brand"};
        let UnwindCategoryStage={$unwind:"$category"};
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'brandID':0,'categoryID':0}};
    
        let data=await ProductModel.aggregate([
            MatchStage,JoinWithBrandStage,
            JoinWithCategoryStage,UnwindBrandStage,
            UnwindCategoryStage,ProjectionStage
         ])
        return {status:"Success",data:data}

    }
    catch(e){
        return {status:"Fail",data:e}.toString()
    }
}

const ListBySimilarService=async(req)=>{

    try{
        let CategoryID=new ObjectId(req.params.CategoryID);
        let MatchStage={$match:{categoryID:CategoryID}};
        let LimitStage={$limit:20};
        let JoinWithBrandStage={$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage={$unwind:"$brand"};
        let UnwindCategoryStage={$unwind:"$category"};
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'brandID':0,'categoryID':0}};
    
        let data=await ProductModel.aggregate([
            MatchStage,LimitStage,JoinWithBrandStage,
            JoinWithCategoryStage,UnwindBrandStage,
            UnwindCategoryStage,ProjectionStage
         ])
        return {status:"Success",data:data}

    }
    catch(e){
        return {status:"Fail",data:e}.toString()
    }

}

const DetailService=async(req)=>{
    try{
        let ProductID=new ObjectId(req.params.ProductID);
        let MatchStage={$match:{_id:ProductID}};
        let JoinWithBrandStage={$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let JoinWithDetailStage={$lookup:{from:"productdetails",localField:"_id",foreignField:"productID",as:"details"}};
        let UnwindBrandStage={$unwind:"$brand"};
        let UnwindCategoryStage={$unwind:"$category"};
        let UnwindProductStage={$unwind:"$details"};
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'brandID':0,'categoryID':0}};

        let data=await ProductModel.aggregate([MatchStage,JoinWithBrandStage,JoinWithCategoryStage,JoinWithDetailStage,    UnwindBrandStage,UnwindCategoryStage,UnwindProductStage,ProjectionStage])

        return {status:"Success",data:data}

    }
    catch(e){
        return {status:"Fail",data:e}.toString();
    }
}
const ListByKeywordService=async(req)=>{
    try{
        let SearchRegex={"$regex":req.params.Keyword,"$options":"i"};
        let SearchParams=[{title:SearchRegex},{shortDes:SearchRegex}];
        let SearchQuery={$or:SearchParams};
        let MatchStage={$match:SearchQuery};
        let JoinWithBrandStage={$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
       
        let UnwindBrandStage={$unwind:"$brand"};
        let UnwindCategoryStage={$unwind:"$category"};
     
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'brandID':0,'categoryID':0}};

        let data=await ProductModel.aggregate([MatchStage,JoinWithBrandStage,JoinWithCategoryStage,UnwindBrandStage,UnwindCategoryStage,ProjectionStage]);

        return {status:"Success",data:data}

    }
    catch(e){
        return {status:"Fail",data:e}.toString();
    }
}

const ReviewListService=async(req)=>{

    try{

        let ProductID=new ObjectId(req.params.ProductID);
        let MatchStage={$match:{productID:ProductID}};
        let JoinWithProfileStage={$lookup:{from:"profiles",localField:"userID",foreignField:"userID",as:"profile"}};
        let UnwindProfileStage={$unwind:"$profile"};
        let ProjectionStage={$project:{'des':1,'rating':1,'profile.cus_name':1}};
        let data= await ReviewModel.aggregate([MatchStage,JoinWithProfileStage,UnwindProfileStage,ProjectionStage]);
        return{status:"success",data:data};

    }
    catch(e){
        return {status:"Fail",data:e}.toString();
    }
}

module.exports={
    BrandListService,
    CategoryListService,
    SliderListService,
    ListByBrandService,
    ListByCategoryService,
    ListBySimilarService,
    ListByRemarkService,
    ListByKeywordService,
    ReviewListService,
    DetailService

}