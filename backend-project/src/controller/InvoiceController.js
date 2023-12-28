const {CreateInvoiceService, PaymentSuccessService, PaymentFailService, PaymentCancelService, PaymentIPNService,
    InvoiceListService, InvoiceProductListService
} = require("../services/InvoiceServices");


const CreateInvoice=async(req,res)=>{
    let result=await CreateInvoiceService(req);
    return res.status(200).json(result)
}


const PaymentSuccess=async (req, res) => {
    let result=await PaymentSuccessService(req);
    return res.redirect('localhost:5050/profile');
}

const PaymentFail=async (req, res) => {
    let result=await PaymentFailService(req);
    return res.redirect('localhost:5050/profile');
}


const PaymentCancel=async (req, res) => {
    let result=await PaymentCancelService(req);
    return res.redirect('localhost:5050/profile');
}


const PaymentIPN=async (req, res) => {
    let result=await PaymentIPNService(req);
    return res.status(200).json(result)
}



const InvoiceList=async (req, res) => {
    let result=await InvoiceListService(req);
    return res.status(200).json(result)
}

const InvoiceProductList=async (req, res) => {
    let result=await InvoiceProductListService(req);
    return res.status(200).json(result)
}

module.exports={
    CreateInvoice,
    PaymentSuccess,
    PaymentFail,
    PaymentCancel,
    PaymentIPN,
    InvoiceList,
    InvoiceProductList
}