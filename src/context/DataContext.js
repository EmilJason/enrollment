import { createContext, useReducer } from "react";

export const DataContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { state: state.count + 1 };

    default:
      return state;
  }
}

export const DataContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {props.children}
    </DataContext.Provider>
  );
};
