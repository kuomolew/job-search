import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav";

describe("MainNav", () => {
  it("displays company name", async () => {
    const wrapper = mount(MainNav);
    await wrapper.setData({
      company: "Super Corp",
    });
    expect(wrapper.text()).toMatch("Careers");
  });
});
