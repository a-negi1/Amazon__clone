import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";

export function renderPaymentSummary (){
    let productPricePaise = 0;
    let ShippingPricePaise = 0;
cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId)
    productPricePaise+=product.pricePaise * cartItem.quantity

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionsId);
    ShippingPricePaise += deliveryOption.pricePaise

}); 
   const toatlBeforeTaxPaise = productPricePaise +  ShippingPricePaise;
   const taxPaise = totalBeforeTaxPaise * 0.1;
   const totalCents = totalBeforeTaxPaise + taxPaise;
   
}