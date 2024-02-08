// #assignment-4
//problem-1:

function  calculateMoney(ticketSale){

   if(ticketSale < 0){
      return 'Please,Give the positive number!'
   }
   const price = (ticketSale * 120 ) - (500 + (8 * 50));
   return price;
}


//problem-2:
function checkName (names){
   if(typeof names !== 'string'){
      return 'Please, Enter Your name.';
   }

   const lastChar = names.charAt(names.length - 1).toLowerCase();
   if(['a', 'y', 'i', 'e', 'o', 'u', 'w'].includes(lastChar)){
      return 'Good Name';
   }else{
      return 'Bad Name'
   }

}


//problem-3:
function deleteInvalids(array){
   if(!Array.isArray(array)){
      return 'please, Enter an Array!'
   }
   const result = [];
   for(let i = 0; i < array.length; i++){
      if(Number.isFinite(array[i])){
         result.push(array[i])
      }
   }
   return result;
}

//problem-4:

function password (obj){
   const password = obj.siteName +'#'+ obj.name.toLowerCase() +'@'+obj.birthYear;
   return password;
}

//problem-5:
function monthlySavings(payments, livingCost){
   if(!Array.isArray(payments)){
      return 'invalid input';
   }
   if(typeof livingCost !== "number"){
      return 'invalid input';
   }

   let totalIncome = 0;
   for(const payment of payments){
      totalIncome = totalIncome + payment;
   }
   let tax =  0;
   for(const payment of payments){
      if(payment >= 3000){
         tax = (tax + payment) * 0.2;
      }
   }
   const saving = totalIncome - tax - livingCost;
   if(saving < 0){
      return 'earn more';
   }
   return saving;
}





