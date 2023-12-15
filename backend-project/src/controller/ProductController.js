
const { BrandListService,CategoryListService,SliderListService,ListByBrandService, ListByCategoryService,ListBySimilarService,ListByRemarkService,ListByKeywordService,ReviewListService,DetailService}=require("../services/ProductServices")

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

const ProductListBySimilar=async(req,res)=>{

    let result=await ListBySimilarService(req);
    return res.status(200).json(result);
}
const ProductDetail=async(req,res)=>{
    let result=await DetailService(req);
    return res.status(200).json(result);

}

const ProductListByKeyword=async(req,res)=>{
    let result=await ListByKeywordService(req);
    return res.status(200).json(result);
}

const ProductReviewList=async(req,res)=>{
    let result=await ReviewListService(req);
    return res.status(200).json(result);
}



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