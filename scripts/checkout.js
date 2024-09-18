import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch } from '../data/products.js'

async function loadPage() {
  try {
    //throw  'error1'

    await loadProductsFetch();
  
  } catch (error) {
    
    console.log('Unexpected Error. Please Try Again Later')
  
  }
  
  renderCheckoutHeader()
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage()


/*
Promise.all([
  loadProductsFetch(),
]).then(() => {
  renderCheckoutHeader()
  renderOrderSummary();
  renderPaymentSummary();
})
*/
