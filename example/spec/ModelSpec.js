describe("Tests for a custom Backbone Model", function() {
  var macys;

  beforeEach(function() {
    macys = new StoreModel({
      brandName: 'macys',
      website: 'http://www.macys.com',
      yearFounded: 1858,
      isDepartmentStore: true
    });
  })

  it("can have default properties such as brandName, website, yearFounded, and isDepartmentStore", function() {
    expect(macys.defaults).toBeDefined();
    expect(macys.defaults.brandName).toBeDefined();
    expect(macys.defaults.website).toBeDefined();
    expect(macys.defaults.yearFounded).toBeDefined();
    expect(macys.defaults.isDepartmentStore).toBeDefined();
  });

  it("can have a custom method called calculateAge", function() {
    expect(macys.calculateAge).toBeDefined();
  });

  it("can have a custom method called fetchDepartments", function() {
    expect(macys.fetchDepartments).toBeDefined();
  });

  it("will set the age after calculateAge is called", function() {
    macys.calculateAge();
    expect(macys.get('age')).toBeDefined();
    expect(macys.get('age')).toEqual((new Date().getFullYear()) - macys.get('yearFounded'));
  });

  it("can make sure that calculateAge is called when instantiated", function() {
    spyOn(macys, 'calculateAge');
    macys.initialize();
    expect(macys.calculateAge).toHaveBeenCalled();
  });

  it("can make sure that fetchDepartments is called with the correct arguments when instantiated, but only if isDepartmentStore is true", function() {
    spyOn(macys, 'fetchDepartments');
    macys.initialize();
    macys.set('isDepartmentStore', false);
    macys.initialize();
    expect(macys.fetchDepartments.calls.count()).toEqual(1);
  });

  it("can test Model events using spies in the spec", function() {
    var myObject = {
      aFakeCallback: function() {
        return true;
      }
    }

    spyOn(myObject, 'aFakeCallback');
    macys.on('customEvent', myObject.aFakeCallback);

    macys.triggerCustomEvent();
    expect(myObject.aFakeCallback).toHaveBeenCalled();
  });
});