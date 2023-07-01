const initialState = {
  balance: 0,
  loan: 0,
  reason: "",
};

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposite":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        balance: state.balance + action.payload.amount,
        loan: action.payload.amount,
        reason: action.payload.reason,
      };

    case "account/payLoan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan:0,
      };

    default:
      return state;
  }
};

// ??Action creator Start

export const deposite = (money) => {
  return { type: "account/deposite", payload: money };
};



export const withdraw = (money) => {
  return {
    type: "account/withdraw",
    payload: money,
  };
};

export function requestLoan(amount, reason) {
  return {
    type: "account/requestLoan",
    payload: { amount, reason },
  };
}

export function payLoan() {
  return { type: "account/payLoan" };
}

//  ?? ACtion Creator End 
// store.dispatch({ type: "account/deposite", payload: 300 });
// console.log(store.getState());

//store.dispatch(deposite(500));
//store.dispatch(withdraw(200));
//console.log(store.getState());
