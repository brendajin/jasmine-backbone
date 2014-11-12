describe("Tests for a custom Backbone Model", function() {
  var Macys;

  beforeEach(function() {
    Macys = new StoreModel({
      brandName: 'macys',
      website: 'http://www.macys.com',
      yearFounded: 1858,
      isDepartmentStore: true
    });
  })

  it("can have default properties such as brandName, website, yearFounded, and isDepartmentStore", function() {
    expect(Macys.defaults).toBeDefined();
    expect(Macys.defaults.brandName).toBeDefined();
    expect(Macys.defaults.website).toBeDefined();
    expect(Macys.defaults.yearFounded).toBeDefined();
    expect(Macys.defaults.isDepartmentStore).toBeDefined();
  });

  it("can have a custom method called calculateAge", function() {
    expect(Macys.calculateAge).toBeDefined();
  });

  it("can have a custom method called fetchDepartments", function() {
    expect(Macys.fetchDepartments).toBeDefined();
  });

  it("will set the age after calculateAge is called", function() {
    Macys.calculateAge();
    expect(Macys.get('age')).toBeDefined();
    expect(Macys.get('age')).toEqual((new Date().getFullYear()) - Macys.get('yearFounded'));
  });

  it("can make sure that calculateAge is called when instantiated", function() {
    spyOn(Macys, 'calculateAge');
    Macys.initialize();
    expect(Macys.calculateAge).toHaveBeenCalled();
  });

  it("can make sure that fetchDepartments is called with the correct arguments when instantiated, but only if isDepartmentStore is true", function() {
    spyOn(Macys, 'fetchDepartments');
    Macys.initialize();
    Macys.set('isDepartmentStore', false);
    Macys.initialize();
    expect(Macys.fetchDepartments.calls.count()).toEqual(1);
  });

  it("can test Model events using spies in the spec", function() {
    var myObject = {
      aFakeCallback: function() {
        return true;
      }
    }

    spyOn(myObject, 'aFakeCallback');
    Macys.on('customEvent', myObject.aFakeCallback);

    Macys.triggerCustomEvent();
    expect(myObject.aFakeCallback).toHaveBeenCalled();
  });
});