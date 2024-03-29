// Save expenses to local storage
function saveExpensesToLocalStorage() {
    localStorage.setItem("expenses", expenseList.innerHTML);
  }
  
  // Retrieve expenses from local storage
  function retrieveExpensesFromLocalStorage() {
    const savedExpenses = localStorage.getItem("expenses");
    if (savedExpenses) {
      expenseList.innerHTML = savedExpenses;
    }
  }
  
  // Event listener for form submission
  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!expenseAmount.value || !expenseDescription.value || !expenseCategory.value) {
      return;
    }
  
    const expense = document.createElement("li");
    expense.innerHTML = `
      <span>${expenseAmount.value} - ${expenseDescription.value} - ${expenseCategory.value}</span>
      <button class="delete-expense">Delete</button>
    `;
  
    expenseList.appendChild(expense);
  
    expenseAmount.value = "";
    expenseDescription.value = "";
    expenseCategory.value = "";
  
    expense.querySelector(".delete-expense").addEventListener("click", () => {
      expense.remove();
      saveExpensesToLocalStorage(); // Update local storage after deleting expense
    });
  
    saveExpensesToLocalStorage(); // Save new expense to local storage
  });
  
  // Event listener for deleting an expense
  expenseList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-expense")) {
      e.target.parentElement.remove();
      saveExpensesToLocalStorage(); // Update local storage after deleting expense
    }
  });
  
  // Retrieve expenses from local storage when page loads
  window.addEventListener("DOMContentLoaded", () => {
    retrieveExpensesFromLocalStorage();
  });
  