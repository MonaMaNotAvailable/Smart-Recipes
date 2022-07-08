/**
 * @jest-environment jsdom
 */

 import { expect, test } from "@jest/globals";
//  import { render } from "@testing-library/react";
 import { renderHook } from "@testing-library/react-hooks";
 import useStyleList from "../useStyleList.js";
 
//  function getStyleList(recipe) {
//    let list;
 
//    function TestComponent() {
//      list = useStyleList(recipe);
//      return null;
//    }
 
//    render(<TestComponent />);
//    return list;
//  }
 
 test("gives an empty list with no recipe", async () => {
//    const [styleList, status] = getStyleList();
    const { result } = renderHook(() => useStyleList(""));
    const [styleList, status] = result.current;
    expect(styleList).toHaveLength(0);
    expect(status).toBe("unloaded");
 });

//  test("gives back styles with a type", async () => {
//     const styles = [
//         "Japanese",
//         "French",
//         "Chinese",
//         "American",
//         "Korean",
//         "Italian",
//         "Spanish"
//     ];
//     fetch.mockResponseOnce(
//       JSON.stringify({
//         type: "Carbohydrate",
//         styles,
//       })
//     );
//     const { result, waitForNextUpdate } = renderHook(() => useStyleList("Carbohydrate"));
  
//     await waitForNextUpdate();
  
//     const [styleList, status] = result.current;
//     expect(status).toBe("loaded");
//     expect(styleList).toEqual(styles);
//   });