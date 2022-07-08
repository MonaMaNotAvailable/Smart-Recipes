export default function theme(state = "#ba68c8", action) {
    switch (action.type) {
      case "CHANGE_THEME":
        return action.payload;
      default:
        return state;
    }
  }