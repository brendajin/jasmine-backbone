describe("A Backbone Model", function() {
  it("should have an initialize method", function() {
    expect(myModel.initialize).toBeDefined();
  });
});

describe("An instance of a Backbone Model", function() {
  var myModelInstance;

  beforeEach(function() {
    myModelInstance = new MyModel();
  });

  it("should have an initialize method", function() {
    expect(myModelInstance.initialize).toBeDefined();
  });
});