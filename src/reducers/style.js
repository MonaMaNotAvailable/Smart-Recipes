export default function style(state = "", action) {
    switch (action.type) {
      case "CHANGE_STYLE":
        return action.payload;
      case "CHANGE_TYPE":
        return "";
      default:
        return state;
    }
  }