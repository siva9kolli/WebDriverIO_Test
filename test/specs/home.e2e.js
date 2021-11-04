
const assert = require("assert");
const HomePage = require("../pageobjects/home.page");

describe("Willis Towers Watson Launch page", () => {
  it("Verify Willis Towers Watson Launch Page title", async () => {
    await browser.url(
      "https://www.willistowerswatson.com/en-us/solutions/insurance-consulting-and-technology"
    );
    await browser.maximizeWindow();

    const title = await browser.getTitle();
    await assert.strictEqual(
      title,
      "Insurance Consulting and Technology - Willis Towers Watson"
    );
  });

  it("Search for content and Verify all articles starting with same URL", async () => {
    await HomePage.change_language_and_region();
    await HomePage.search("IFRS 17");
    await assert.strictEqual(
      await HomePage.verify_filter_heading(),
      "Filter by"
    );
    await HomePage.verify_result_sort_by_date();
    await HomePage.select_content_type();
    let number_of_links = await HomePage.get_all_article_links();
    await assert.strictEqual(number_of_links, 10);
  });
});
