import { mount } from "@vue/test-utils";
import "whatwg-fetch"; // Polyfill for window.fetch
import { default as FakeList, MIN_ID, MAX_ID } from "@/components/FakeList";

const MOCKED_ITEMS = [
  { id: 1, label: "Mocked label" },
  { id: 2, label: "Another mocked label" },
];

describe("@/components/FakeList", function () {
  beforeEach(() => {
    this.wrapper = mount(FakeList);
  });
  describe("getFilteredItems", () => {
    it("should call filterHandler for each item", () => {
      //TODO
      /*
        expect(....).toBeCalledTimes
      */
    });
  });
  describe("setItems", () => {
    it("should call method getFilteredItems with own argument", () => {
      //TODO
    });
    it("should set result from  getFilteredItems to property items", () => {
      //TODO
    });
  });
  describe("getItems", () => {
    beforeEach(() => {
      this.wrapper.vm.fetchList = jest.fn(); // Replace method with "fake" function
      // Tell fake function to resolve promise with value
      this.wrapper.vm.fetchList.mockResolvedValue(MOCKED_ITEMS);
    });
    it("should call method fetchList", async () => {
      await this.wrapper.vm.getItems();
      // Ask if fake function was called
      expect(this.wrapper.vm.fetchList).toBeCalled();
      expect(this.wrapper.vm.fetchList).toBeCalledTimes(1);
    });
    it("should call method setItems with response from fetchList", async () => {
      this.wrapper.vm.setItems = jest.fn();
      await this.wrapper.vm.getItems();
      // Ask if fake function was called with MOCKED_ITEMS as argument
      expect(this.wrapper.vm.setItems).toBeCalledWith(MOCKED_ITEMS);
    });
  });
  describe("filterHandler", () => {
    it("should not allow id less then MIN_ID ", () => {
      const mockItem = { label: "Test Label", id: MIN_ID - 1 };
      expect(this.wrapper.vm.filterHandler(mockItem)).toBeFalsy();
    });
    it("should not allow id greater then MAX_ID", () => {
      const mockItem = { label: "Test Label", id: MAX_ID + 5 };
      expect(this.wrapper.vm.filterHandler(mockItem)).toBeFalsy();
    });
    it("should allow id greater than MIN_ID and less MAX_ID", () => {
      const mockItem = { label: "Test Label", id: MIN_ID + 2 };
      expect(this.wrapper.vm.filterHandler(mockItem)).toBeTruthy();
    });
    it("should not allow id greater then MIN_ID but greater than MAX_ID", () => {
      //TODO
    });
    it("should not allow id less then MIN_ID but less than MAX_ID", () => {
      //TODO
    });
  });
  it("should fetch and set response.data to items.property", async () => {
    await this.wrapper.vm.getItems();
    expect(this.wrapper.vm.items.length).toBeGreaterThan(0);
  });
});
