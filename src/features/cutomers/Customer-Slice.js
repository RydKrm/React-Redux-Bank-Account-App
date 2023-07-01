const customerState = {
  fullName: "",
  nationalID: "",
  createAt: "",
};

export default function  customerReducer(state = customerState, action){
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createAt: action.payload.createAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload.fullName,
      };
    default:
      return state;
  }
};

//?? Action Creator Start
 export function createCustomer(fullName,nationalID){
    return {
        type:"customer/createCustomer",
        payload:{fullName,nationalID,createAt:new Date().toISOString()}

        }
    }
 export function updateName(fullName){
    return {
        type:"customer/updateCustomer",
        payload:fullName,
    }
 }


//?? Action Creator End

// store.dispatch({
//   type: "customer/createCustomer",
//   payload: {
//     fullName: "Al Riyad karim",
//     nationalID: "4567841",
//     createAt: new Date().toISOString(),
//   },
// });
