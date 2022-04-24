import { mount } from "@vue/test-utils";

import TButton from "@/elements/TButton";

//Snapshot

describe("@/elements/TButton", () => {
  it("should mount with title", () => {
    const wrapper = mount(TButton, {
      propsData: {
        title: "Hey now",
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
  it("should mount with not default type", () => {
    const wrapper = mount(TButton, {
      propsData: {
        title: "Hey now",
        type: "submit",
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
