class AndroidPage {
  /**
   * define selectors using getter methods
   */

  get login_button() {
    return $("activity_prelogin_button_login");
  }

  get email_input_box() {
    return $("view_lw_textinputlayout_edittext");
  }

  get continue_button() {
    return $("activity_login_button_continue");
  }

  get password_input_box() {
    return $("//*[@text='Password']");
  }

  get skip_button() {
    return $("action_skip");
  }

  get do_it_later() {
    return $("skip_button");
  }

  async login_as_user() {
    await this.email_input_box.click();
    await this.email_input_box.setValue("test@test.com");
    await this.continue_button.click();

    await this.password_input_box.setValue("Testtest456!");
    await this.continue_button.click();
  }
}

module.exports = new AndroidPage();
