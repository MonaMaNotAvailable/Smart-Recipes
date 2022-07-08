/**
 * @jest-environment jsdom
 */

 import { expect, test } from "@jest/globals";
 import { render } from "@testing-library/react";
 import Recipe from "../Recipe.js";
 import { StaticRouter } from "react-router-dom/server";
 
 test("displays a default thumbnail", async () => {
   const recipe = render(
    <StaticRouter>
        <Recipe />
    </StaticRouter>
  );
 
   const recipeThumbnail = await recipe.findByTestId("thumbnail");
   expect(recipeThumbnail.src).toContain("https://www.pngkey.com/png/full/17-170975_starbucks-gingerbread-loaf-recipe-boissons-starbucks-pink-starbucks.png");
 });

 test("displays a non-default thumbnail", async () => {
    const recipe = render(
      <StaticRouter>
        <Recipe images={["1.jpg", "2.jpg", "3.jpg"]} />
      </StaticRouter>
    );
  
    const recipeThumbnail = await recipe.findByTestId("thumbnail");
    expect(recipeThumbnail.src).toContain("1.jpg");
  });