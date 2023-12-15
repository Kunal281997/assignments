/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryBasedTotalAmount = [];

  transactions.forEach((transaction) => {
    if (categoryBasedTotalAmount.length === 0) {
      categoryBasedTotalAmount.push({
        category: transaction.category,
        totalSpent: transaction.price,
      });
    } else {
      const existingCategory = categoryBasedTotalAmount.find(
        (spentCategory) => transaction.category === spentCategory.category
      );
      if (!existingCategory) {
        categoryBasedTotalAmount.push({
          category: transaction.category,
          totalSpent: transaction.price,
        });
      } else {
        existingCategory.totalSpent += transaction.price;
      }
    }
  });
  console.log("Categoy spents+--++--", categoryBasedTotalAmount);
  return categoryBasedTotalAmount;
}

module.exports = calculateTotalSpentByCategory;
