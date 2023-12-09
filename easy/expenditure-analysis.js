/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: 'Clothing',
    itemName: 'T-Shirt',
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: 'Electronics',
    itemName: 'Headphones',
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: 'Clothing',
    itemName: 'Jeans',
  },
];

// function calculateTotalSpentByCategory(transactions) {
//   for(var x of transactions){
//     for(var y in x){
//       console.log(y)
//     }
//     console.log(x)
//   }
//   // transactions.map((value,index)=>{
//   //   value.map((x,y)=>{
//   //     console.log(` ${x.category} : ${value.category} , ${x.price} : ${value.price}`)
//   //   })
//   // })
// }


// console.log(calculateTotalSpentByCategory(transactions))

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  transactions.forEach(transaction => {
    const { category, price } = transaction;

    // Check if the category is already in the totals object
    if (categoryTotals.hasOwnProperty(category)) {
      categoryTotals[category] += price;
    } else {
      categoryTotals[category] = price;
    }
  });

  // Convert the totals object into an array of objects
  const result = Object.keys(categoryTotals).map(category => ({
    [category]: categoryTotals[category]
  }));

  return result;
}

// Example usage:
// const transactions = [
//   { itemName: 'Item1', category: 'Food', price: 20, timestamp: '2023-01-01' },
//   { itemName: 'Item2', category: 'Clothing', price: 50, timestamp: '2023-01-02' },
//   { itemName: 'Item3', category: 'Food', price: 30, timestamp: '2023-01-03' },
//   // ... other transactions
// ];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);



module.exports = calculateTotalSpentByCategory;
