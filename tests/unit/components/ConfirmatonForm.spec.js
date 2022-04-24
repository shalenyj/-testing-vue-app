import { mount } from "@vue/test-utils";

import ConfirmationForm from "@/components/ConfirmationForm";

describe("@/elements/ConfirmationForm", () => {
  it("should match snapshot", () => {
    const wrapper = mount(ConfirmationForm);
    expect(wrapper.element).toMatchSnapshot();
  });
  it("should verify if elements exist", () => {
    const wrapper = mount(ConfirmationForm);
    expect(wrapper.find(".buttons").exists()).toBeTruthy();
    expect(wrapper.find(".t-button").exists()).toBeTruthy();
    expect(wrapper.find("form").exists()).toBeTruthy();
  });
});
