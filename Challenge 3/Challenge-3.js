//La base de donnée
const register = [
  {
    tableID: 0,
    orders: [
      {
        item: "coffee",
        qty: 3,
        price: 3.5
      },
      {
        item: "salad",
        qty: 3,
        price: 8
      },
      {
        item: "steak",
        qty: 3,
        price: 28
      },
      {
        item: "ice cream",
        qty: 3,
        price: 5
      }
    ]
  },
  {
    tableID: 1,
    orders: [
      {
        item: "coffee",
        qty: 2,
        price: 3.5
      },
      {
        item: "salad",
        qty: 2,
        price: 8
      },
      {
        item: "steak",
        qty: 2,
        price: 28
      },
      {
        item: "ice cream",
        qty: 2,
        price: 5
      }
    ]
  }
];

// const getSubTotal = function (table) {
//   let subTotal = 0
//   //Avoir le prix de tous les items de l'order
//   register[table].orders.forEach((order) => {
//     subTotal += order.price * order.qty
//   })
//   return subTotal
// }

// const calcPercentage = function (percentage, subTotal) {
//   let tax = percentage / 100 * subTotal
//   return tax.toFixed(2)
// }

// const createBill = function (table) {
//   const subTotal = getSubTotal(table)
//   const tax = calcPercentage(8.1, subTotal)
//   const tip = calcPercentage(10, subTotal)
//   const total = +subTotal + +tax + +tip
//   const bill = {
//     subTotal,
//     tax,
//     tip,
//     total: `CHF ${(total)}`
//   }
//   return bill;

// }

// //Table 0
// // console.log(getSubTotal(0))
// // console.log(calcPercentage(8.1, getSubTotal(0)))
// console.log(createBill(0))
// //Table 1
// // console.log(getSubTotal(1))
// // console.log(calcPercentage(8.1, getSubTotal(1)))
// console.log(createBill(1))

const getSubtotal = function (table) {
  //,0 est la valeur initiale
  return table.orders.reduce((total, order) => total += order.price * order.qty, 0);
}

const calcPourcentage = (taux, nombre) => (nombre * taux /100);

const createBill = function (table){
  const subtotal = getSubtotal(table);
  const tax = calcPourcentage(8.1, subtotal);
  const tip = calcPourcentage(10, subtotal);
  const total = subtotal + tax + tip;
  const bill = {
      subtotal,
      tax,
      tip,
      total: `CHF ${(total).toFixed(2)}`
  }
      return bill;
}
register.forEach((table) => {
  console.log(createBill(table))
});

const splitBill = function(table, noPersonne){
  const subtotal = getSubtotal(table)
  const divise = subtotal/noPersonne
  console.log(`Le prix par personne est de ${divise.toFixed(2)} `)
}
splitBill(register[0],9)