class HomePage {
  /**
   * define selectors using getter methods
   */

  get language_region_menu() {
    return $("nav[aria-label='Location Selector']");
  }

  get region() {
    return $("//*[text()='Americas']/../following-sibling::i");
  }

  get language() {
    return $(
      "//div[normalize-space()='United States']/following-sibling::div/div/div/a[normalize-space()='English']"
    );
  }

  get acceptButton() {
    return $("#truste-consent-button");
  }
  get searchButton() {
    return $("button > span + .site-nav__btn__icon");
  }
  get inputBox() {
    return $("input[aria-label='Search box']");
  }
  get btnSubmit() {
    return $("a[aria-label='Search']");
  }

  get filterByHeading() {
    return $("//h4[text()='Filter by']");
  }

  get dataOption() {
    return $("span[data-caption='Date']");
  }

  get dateNotSelected() {
    return $(
      "span[data-caption='Date'] > span[aria-checked='false']:not(.coveo-icon.coveo-accessible-button) "
    );
  }

  get dateSelected() {
    return $(
      "span[data-caption='Date'] > span[aria-checked='true']:not(.coveo-icon.coveo-accessible-button) "
    );
  }

  get contentTypeCheckbox() {
    return $("//span[@title='Article']/preceding-sibling::div");
  }

  get allArticles() {
    return $("div[data-field='@clickUri']");
  }

  /**
   * Change the language and region from top left corner to United States English,
   */
  async change_language_and_region() {
    await browser.setTimeout({ implicit: 5000 });
    await browser.waitUntil(() => this.acceptButton.isClickable());
    await this.acceptButton.click();
    await this.language_region_menu.click();
    await browser.waitUntil(() => this.region.isClickable());
    await this.region.click();
    await this.language.click();
  }

  /**
   * Search for the word “IFRS 17” using the search box
   * @param {*} value
   */
  async search(value) {
    await this.searchButton.moveTo();
    await this.searchButton.click();
    await this.inputBox.setValue(value);
    await this.btnSubmit.click();
  }

  /**
   *
   * @returns Validate if you have arrived on the result page
   */
  async verify_filter_heading() {
    await browser.waitUntil(() => this.filterByHeading.isDisplayed());
    let filterLabel = await this.filterByHeading.getText();
    return filterLabel;
  }

  /**
   * Check if the result is sorted by “Date”. If not, sort by “Date”
   */
  async verify_result_sort_by_date() {
    if (this.dateNotSelected.isDisplayed()) {
      this.dateNotSelected.click();
    }
  }

  /**
   * Use the “Filter by” functionality and set Content Type to “Article”
   */
  async select_content_type() {
    this.contentTypeCheckbox.click();
  }

  /**
   * Validate that each article in the list displays a link that starts with “https://www.willistowerswatson.com/en-US/”
   * @returns
   */
  async get_all_article_links() {
    await browser.waitUntil(
      async () =>
        (await $("div[aria-label='Content Type facet.']").getText()) ===
        "Content Type",
      {
        timeout: 5000,
        timeoutMsg: "expected text to be different after 5s",
      }
    );
    let list_articles = $$(
      "//div[@data-field='@clickUri']/span[starts-with(text(),'https://www.willistowerswatson.com/en-US')]"
    );
    var total_elements = [];
    await list_articles.forEach((element) => {
      browser.pause(2000);
      total_elements = total_elements.concat(element.getText());
      //total_elements.push.apply(total_elements, element.getText());
      console.log("all links" + total_elements);
    });
    await console.log("size of arrray = " + total_elements.length);
    return total_elements.length;
  }
}
module.exports = new HomePage();
