//reducer takes in a state and an action that must have a type
//reducer is called with every single action, so we need default case

//old state = Seattle
//action: {type: "CHANGE_LOCATION", payload: "Beijing"}
//new state = "Beijing"
export default function location(state = "Boston, MA", action) {
    switch (action.type) {
      case "CHANGE_LOCATION":
        return action.payload;
      default:
        return state;
    }
  }