document.getElementById('productNum').value = '1';
document.getElementById('caseNum').value = '1';

document.getElementById('productNum-decrease').addEventListener('click', function(){
    const productNum = convertstring('productNum');
    const newAmount = productNum - 1;
    if(newAmount < 0){
        newAmount = 0;
    }
    
    document.getElementById('productNum').value = newAmount;
 
    const iphonePrice = parseInt(document.getElementById('iphoneValue').innerText);
    document.getElementById('iphoneValue').innerText = iphonePrice - 1219 ;


    const one = parseInt(document.getElementById('iphoneValue').innerText) ;
    const two = parseInt(document.getElementById('caseAmount').innerText)
    document.getElementById('subtotal').innerText = one + two;

    const sub =  parseInt(document.getElementById('subtotal').innerText);
    const taxnum = parseInt(document.getElementById('tax').innerText);
    const tax = (sub / 100) * 3 ;
    document.getElementById('tax').innerText = Math.round(tax);
    const taxAmount = parseInt(document.getElementById('tax').innerText);
    document.getElementById('total').innerText = taxAmount + sub;
    
})
document.getElementById('productNum-increase').addEventListener('click', function(){
    const productNum = convertstring('productNum');
    const newAmount = productNum + 1;
   
    document.getElementById('productNum').value = newAmount;

    document.getElementById('iphoneValue').innerText = 1219 * newAmount;

    const one = parseInt(document.getElementById('iphoneValue').innerText) ;
    const two = parseInt(document.getElementById('caseAmount').innerText)
    document.getElementById('subtotal').innerText = one + two;


    const sub =  parseInt(document.getElementById('subtotal').innerText);
    const taxnum = parseInt(document.getElementById('tax').innerText);
    const tax = (sub / 100) * 3 ;
    document.getElementById('tax').innerText = Math.round(tax);
    const taxAmount = parseInt(document.getElementById('tax').innerText);
    document.getElementById('total').innerText = taxAmount + sub;
})
document.getElementById('productNum').addEventListener('input', function () {
    const productNum = convertstring('productNum');
    document.getElementById('iphoneValue').innerText = 1219 * productNum;

    const one = parseInt(document.getElementById('iphoneValue').innerText) ;
    const two = parseInt(document.getElementById('caseAmount').innerText)
    document.getElementById('subtotal').innerText = one + two;


    const sub =  parseInt(document.getElementById('subtotal').innerText);
    const taxnum = parseInt(document.getElementById('tax').innerText);
    const tax = (sub / 100) * 3 ;
    document.getElementById('tax').innerText = Math.round(tax);
    const taxAmount = parseInt(document.getElementById('tax').innerText);
    document.getElementById('total').innerText = taxAmount + sub;
    
})
document.getElementById('caseNum').addEventListener('input', function () {
    const productNum = convertstring('caseNum');
    document.getElementById('caseAmount').innerText = 59 * productNum;

    const one = parseInt(document.getElementById('iphoneValue').innerText) ;
    const two = parseInt(document.getElementById('caseAmount').innerText)
    document.getElementById('subtotal').innerText = one + two;


    const sub =  parseInt(document.getElementById('subtotal').innerText);
    const taxnum = parseInt(document.getElementById('tax').innerText);
    const tax = (sub / 100) * 3 ;
    document.getElementById('tax').innerText = Math.round(tax);
    const taxAmount = parseInt(document.getElementById('tax').innerText);
    document.getElementById('total').innerText = taxAmount + sub;
})
function convertstring(id){
    const num = parseInt(document.getElementById(id).value);
    return num;
}

document.getElementById('caseNumDecrease').addEventListener('click', function(){
    const productNum = convertstring('caseNum');
    const newAmount = productNum - 1;
    if(newAmount < 0){
        newAmount = 0;
    }
    
    document.getElementById('caseNum').value = newAmount;
 
    const casePrice = parseInt(document.getElementById('caseAmount').innerText);
    document.getElementById('caseAmount').innerText = casePrice - 59 ;

    const one = parseInt(document.getElementById('iphoneValue').innerText) ;
    const two = parseInt(document.getElementById('caseAmount').innerText)
    document.getElementById('subtotal').innerText = one + two;


    const sub =  parseInt(document.getElementById('subtotal').innerText);
    const taxnum = parseInt(document.getElementById('tax').innerText);
    const tax = (sub / 100) * 3 ;
    document.getElementById('tax').innerText = Math.round(tax);
    const taxAmount = parseInt(document.getElementById('tax').innerText);
    document.getElementById('total').innerText = taxAmount + sub;
    
})

document.getElementById('caseNumIncrease').addEventListener('click', function(){
    const productNum = convertstring('caseNum');
    const newAmount = productNum + 1;
   
    document.getElementById('caseNum').value = newAmount;

    document.getElementById('caseAmount').innerText = 59 * newAmount;

    const one = parseInt(document.getElementById('iphoneValue').innerText) ;
    const two = parseInt(document.getElementById('caseAmount').innerText)
    document.getElementById('subtotal').innerText = one + two;


    const sub =  parseInt(document.getElementById('subtotal').innerText);
    const taxnum = parseInt(document.getElementById('tax').innerText);
    const tax = (sub / 100) * 3 ;
    document.getElementById('tax').innerText = Math.round(tax);
    const taxAmount = parseInt(document.getElementById('tax').innerText);
    document.getElementById('total').innerText = taxAmount + sub;
})