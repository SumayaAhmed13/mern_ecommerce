
const { BrandListService,CategoryListService,SliderListService,ListByBrandService, ListByCategoryService,ListBySimilarService,ListByRemarkService,ListByKeywordService,ReviewListService,DetailService}=require("../service/ProductServices")

const ProductBrandList=async(req,res)=>{
    let result=await BrandListService();
    return res.status(200).json(result);
}

const ProductCategoryList=async(req,res)=>{
    let result=await CategoryListService();
    return res.status(200).json(result);
}

const ProductSliderList=async(req,res)=>{
    let result=await SliderListService();
    return res.status(200).json(result);
}

const ProductListByBrand=async(req,res)=>{
    let result=await ListByBrandService(req);
    return res.status(200).json(result);

}

const ProductListByCategory=async(req,res)=>{
    let result=await ListByCategoryService(req);
    return res.status(200).json(result);
}
const ProductListByRemark=async(req,res)=>{
    let result=await ListByRemarkService(req);
    return res.status(200).json(result);

}

const ProductListBySimilar=async(req,res)=>{}



const ProductListByKeyword=async(req,res)=>{}

const ProductReviewList=async(req,res)=>{}

const ProductDetail=async(req,res)=>{}

module.exports={
    ProductBrandList,
    ProductCategoryList,
    ProductSliderList,
    ProductListByBrand,
    ProductListByCategory,
    ProductListBySimilar,
    ProductListByKeyword,
    ProductReviewList,
    ProductListByRemark,
    ProductDetail

}