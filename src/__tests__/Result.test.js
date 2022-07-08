/**
 * @jest-environment jsdom
 */

 import { expect, test } from "@jest/globals";
 import { create } from "react-test-renderer";
 import Results from "../Results";
 
 test("renders correctly with no recipes", () => {
   const tree = create(<Results recipes={[]} />).toJSON();
   expect(tree).toMatchSnapshot();
 });