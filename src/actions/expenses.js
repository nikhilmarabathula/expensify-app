import uuid from 'uuid';

// actions
// ADD_EXPENSE

export const addExpenseGen = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

export const removeExpenseGen = (id = "") => ({
  type: "REMOVE_EXPENSE",
  id,
});

export const editExpenseGen = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});